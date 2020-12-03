import "./App.css";

import React, { useState, useEffect, useRef } from "react";

export const App = (props) => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [day, setDay] = useState(1);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const key1 = "simpleHrs";
  const key2 = "simpleHis";
  const clickRef = useRef();
  const mapper = {
    0: " 周日 ",
    1: " 周一 ",
    2: " 周二 ",
    3: " 周三 ",
    4: " 周四 ",
    5: " 周五 ",
    6: " 周六 ",
  };
  function inc(add) {
    console.log(typeof add, typeof count);
    setCount(+count + parseInt(add));
    const newHis = [
      `${date}${mapper[new Date().getDay()]} 工時(小時) :${add}`,
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
  // console.log(preCountRef.current.value)
  // console.log(preCountRef.current.value,"rrrrr");

  return (
    <div>
      <p>本周工時: {count}小時 </p>
      {/* <button onClick={() => setDay(+day + 1)}>+1</button>
      <button onClick={() => setDay(+day + 5)}>+5</button> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          inc(day);
        }}
      >
        <p defaultValue={date}>{date}</p>

        <input
          value={day}
          type={Number}
          autoFocus
          ref={clickRef}
          onChange={(e) => setDay(+e.target.value)}
        />
      </form>
      {/* <button onClick={() => inc(day)}>添加</button> */}

      <button
        onClick={() => {
          const pre = history[0] ? count - history[0].split(":")[1] : 0;
          const newHis = history.slice(1) || [];
          console.log(pre, newHis, "........................");

          setCount(pre);
          localStorage.setItem("simpleHrs", pre);
          localStorage.setItem("simpleHis", JSON.stringify(newHis));
          setHistory(newHis);
        }}
      >
        清除
      </button>
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
      <button
        onClick={() => {
          setCount(0);
          localStorage.setItem("simpleHrs", 0);
          localStorage.setItem("simpleHis", []);
          setHistory([]);
        }}
      >
        歸檔
      </button>
      {history.length > 0 &&
        history.map((i, idx) => {
        if (idx<14)
          {return <p>{i}</p>}
        })}
    </div>
  );
};
