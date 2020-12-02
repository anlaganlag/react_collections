import React, { useState, useEffect, useRef, useCallback } from "react";
import useKeyPress from "./usePressKeyHook";
import "./App.css";

export default function App() {
  const [test, setTest] = useState();
  const inputRef = useRef();
  const roll = useKeyPress("r");
  function randomNum(seed) {
    return Math.ceil(Math.random() * seed);
  }

  const resFormat = (idx) =>
    (((idx + 1) * 10000) / 16).toString().split("0")[0];
  function getRandom() {
    let newNum = randomNum(15);
    //如果是偶數和前一個不同時返回
    if (newNum === +inputRef.current.innerText) {
      return getRandom();
    } else {
      return newNum;
    }
  }
  const rollNum = useCallback(getRandom, [roll]);

  useEffect(() => {
    // const getRandom = () => {
    //   let newNum = randomNum(15)
    //   //如果是偶數和前一個不同時返回
    //   if (newNum === +inputRef.current.innerText) {
    //     return getRandom();
    //   } else {
    //     return newNum;
    //   }
    // };

    setTest(rollNum);
  }, [roll]);

  return (
    <>
      <h1 className="q" ref={inputRef}>
        {test}
      </h1>
      <p>
        {[...Array(15)].map((i, idx) => {
          return <p>{idx + 1 + " " + resFormat(idx)}</p>;
        })}
      </p>
    </>
  );
}
