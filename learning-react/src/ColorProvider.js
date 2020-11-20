import React, { createContext, useState, useContext } from "react";
import colorData from "./color-data.json";
import { v4 as uuid } from "uuid";

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);//这是应用端

export default function ColorProvider({ children }) {//这是提供端
  const [colors, setColors] = useState(colorData);

  const addColor = (title, color) =>
    setColors([
      ...colors,
      {
        id: uuid(),
        rating: 0,
        title,
        color
      }
    ]);

  const rateColor = (id, rating) =>
    setColors(
      colors.map(color => (color.id === id ? { ...color, rating } : color))
    );

  const removeColor = id => setColors(colors.filter(color => color.id !== id));

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
}
