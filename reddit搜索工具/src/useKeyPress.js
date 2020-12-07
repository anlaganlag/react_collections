import { useState,useEffect } from "react";

function useKeyPress(targetKey) {
  //該按鍵有兩個狀態..默認false
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler(e) {
    if (e.key === targetKey) {
      setKeyPressed((targetKey) => !targetKey);
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  },);
  return keyPressed;
}

export default useKeyPress;
