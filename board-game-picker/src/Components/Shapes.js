import React from "react";

import classes from "./Shapes.module.css";

const Shapes = React.memo(({ type }) => {
  const getRandomVal = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }
//初始css属性...
  const style = {
    transform: `rotate(${getRandomVal(15, 360)}deg)`,
  };
//初始class的名字..
  let shapeClass;
  switch (type) {
    case "circle":
      shapeClass = classes.circle;
      style.top = `${getRandomVal(400, 600)}px`;
      style.left = `${getRandomVal(0, 250)}px`;
      style.backgroundColor = getRandomColor();
      break
    
    case "square":
      shapeClass = classes.square;
      style.top = `${getRandomVal(0, 300)}px`;
      style.left = `${getRandomVal(0, 250)}px`;
      style.backgroundColor = getRandomColor();
      break
    
    case "triangle":
      shapeClass = classes.triangle;
      style.top = `${getRandomVal(0, 300)}px`;
      style.right = `${getRandomVal(50, 250)}px`;
      style.borderBottom = `150px solid ${getRandomColor()}`;
      break;
    default:
      shapeClass = classes.trap;
  }

  return <div className={shapeClass} style={style} />;
});

export default Shapes;
