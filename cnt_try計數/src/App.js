import React, { useState, useEffect, useRef } from "react";
import { weekDayMapper, KEYTotalHrs, KEYTotalHis } from "./utils";

export const App = (props) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [history, setHistory] = useState([]);
  const [amount, setAmount] = useState(1);

  const inputFocusRef = useRef();
  const d = new Date();

  function formatDate(date, weekDay, amount) {
    return ` ${date} 第${Math.ceil(date.split("/")[2] / 7)}周(${
      weekDayMapper[weekDay]
    }) 工時(小時) :${amount}`;
  }

  function handleTodayHrs(amount) {
    setTotalAmount(+totalAmount + parseInt(amount));
    // const newHis = [
    //   ` ${date} 第${Math.ceil(d.getDate() / 7)}周(${
    //     weekDayMapper[d.getDay()]
    //   }) 工時(小時) :${amount}`,
    //   ...history,
    // ];
    const newHis = [
      {
        date: d.toLocaleDateString(),
        weekDay: d.getDay(),
        amount,
        星期: weekDayMapper[d.getDay()],
      },
      ...history,
    ];
    const newTotalHrs = +totalAmount + amount;
    setHistory(newHis);
    setAmount("1");
    localStorage.setItem(KEYTotalHrs, newTotalHrs);
    localStorage.setItem(KEYTotalHis, JSON.stringify(newHis));
    inputFocusRef.current.focus();
  }
  function handleChange(e) {
    setAmount(+e.target.value);
  }

  useEffect(() => {
    setTotalAmount(+localStorage.getItem(KEYTotalHrs) || 0);
    const lsHis = localStorage.getItem(KEYTotalHis);
    setHistory(lsHis ? JSON.parse(lsHis) : []);
  }, []);
  // console.log(preCountRef.current.value)
  // console.log(preCountRef.current.value,"rrrrr");

  return (
    <div>
      <p>本周工時: {totalAmount}小時 </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleTodayHrs(amount);
        }}
      >
        <input
          value={amount}
          type="number"
          autoFocus
          ref={inputFocusRef}
          onChange={(e) => setAmount(+e.target.value)}
        />
      </form>
      {/* <button onClick={() => handleTodayHrs(amount)}>添加</button> */}

      <button
        onClick={() => {
          const preAmount = (totalAmount- history[0]["amount"] )|| 0;

          const newHis = history.slice(1) || [];

          setTotalAmount(preAmount);
          setHistory(newHis);
          localStorage.setItem(KEYTotalHrs, preAmount);
          localStorage.setItem(KEYTotalHis, JSON.stringify(newHis));
        }}
      >
        清除
      </button>
      <button
        onClick={() => {
          setTotalAmount(0);
          setHistory([]);
          localStorage.setItem(KEYTotalHrs, 0);
          localStorage.setItem(KEYTotalHis, []);
        }}
      >
        重置
      </button>
      <button
        onClick={() => {
          setTotalAmount(0);
          setHistory([]);
          localStorage.setItem(KEYTotalHrs, 0);
          localStorage.setItem(KEYTotalHis, []);
        }}
      >
        歸檔
      </button>
      {history.length > 0 &&
        history.map(({ date, weekDay, amount }, idx) => {
          if (idx < 14) {
            return <p key={idx}>{formatDate(date, weekDay, amount)}</p>;
          }
        })}
    </div>
  );
};
