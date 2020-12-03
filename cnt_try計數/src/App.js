import "./App.css";

import React, { useState, useEffect, useRef } from "react";

export const App = (props) => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [day, setDay] = useState(1);
  const key1 = "simpleHrs";
  const key2 = "simpleHis";
  const clickRef = useRef();
  const preCountRef = useRef();
  function inc(add) {
    console.log(typeof add, typeof count);
    setCount(+count + add);
    const newHis = [
      `${new Date().toLocaleDateString()}工時:${add}小時`,
      ...history,
    ];
    const newCount = +count + add;
    setHistory(newHis);
    localStorage.setItem("simpleHrs", newCount);
    setDay("1");
    clickRef.current.focus();
    localStorage.setItem("simpleHis", JSON.stringify(newHis));
  }
  function handleChange(e) {
    setDay(+e.target.value);
  }

  useEffect(() => {
    setCount(+localStorage.getItem("simpleHrs") || "0");
    const lsHis = localStorage.getItem("simpleHis");
    setHistory(lsHis ? JSON.parse(lsHis) : []);
  }, []);

  return (
    <div>
      <p ref={preCountRef}>工時: {count}小時 </p>
      <button onClick={() => setDay(+day + 1)}>+1</button>
      <button onClick={() => setDay(+day + 5)}>+5</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          inc(day);
        }}
      >
        <input
          value={day}
          autoFocus
          ref={clickRef}
          onChange={(e) => setDay(+e.target.value)}
        />
      </form>
      <button onClick={() => inc(day)}>添加</button>
      <button
        onClick={() => {
          setCount(0);
          localStorage.setItem("simpleHrs", 0);
          localStorage.setItem("simpleHis", []);
          setHistory([]);
        }}
      >
        重置
      </button>
      {/* <button
        onClick={() => {
          const pre = preCountRef.current.value;
          const newHis = history.slice(1) || [];

          setCount(pre);
          localStorage.setItem("simpleHrs", pre);
          localStorage.setItem("simpleHis", newHis);
          setHistory(JSON.stringify(newHis));
        }}
      >
        清除
      </button> */}
      {history.length > 0 && history.map((i, idx) => <p>{i}</p>)}
    </div>
  );
};
