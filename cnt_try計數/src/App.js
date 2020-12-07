import React, { useState, useEffect, useRef } from "react";
import {
  weekDayMapper,
  KEYTotalHrs,
  KEYTotalHis,
  KEYCollectHis,
} from "./utils";
import "./App.css";

export const App = (props) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [history, setHistory] = useState([]);
  const [collectHistory, setCollectHistory] = useState([]);
  const [amount, setAmount] = useState(10);

  const inputFocusRef = useRef();
  const d = new Date();
  // const [record, setRecord] = useState(0)

  function formatDate(date, weekDay, amount) {
    return ` ${date} 第${Math.ceil(date.split("/")[2] / 7)}周(${
      weekDayMapper[weekDay]
    }) 工時(小時) :${amount}`;
  }
  // {date: "2020/12/4", weekDay: 5, amount: 2, 星期: " 星期五 "}
  function handleTodayHrs(amount) {
    let newHis, newTotalHrs, newCollectHis;

    if (history[0] && history[0]["date"] === d.toLocaleDateString()) {
      newTotalHrs = +totalAmount - history[0]["amount"] + amount;
      newHis = [
        {
          date: d.toLocaleDateString(),
          weekDay: d.getDay(),
          amount,
          星期: weekDayMapper[d.getDay()],
        },
        ...history.slice(1),
      ];
    } else {
      newTotalHrs = +totalAmount + amount;
      newHis = [
        {
          date: d.toLocaleDateString(),
          weekDay: d.getDay(),
          amount,
          星期: weekDayMapper[d.getDay()],
        },
        ...history,
      ];
    }
    setTotalAmount(newTotalHrs);

    setHistory(newHis);
    setCollectHistory(newHis);

    setAmount("1");
    localStorage.setItem(KEYTotalHrs, newTotalHrs);
    localStorage.setItem(KEYTotalHis, JSON.stringify(newHis));
    localStorage.setItem(KEYCollectHis, JSON.stringify(newHis));
    inputFocusRef.current.focus();
  }

  useEffect(() => {
    setTotalAmount(+localStorage.getItem(KEYTotalHrs) || 0);
    const lsHis = localStorage.getItem(KEYTotalHis);
    setHistory(lsHis ? JSON.parse(lsHis) : []);

    // setRecord(history.length)
  }, []);
  // console.log(preCountRef.current.value)
  // console.log(preCountRef.current.value,"rrrrr");
  const record = history.length;
  const week = d.getDay() === 0 ? 7 : d.getDay();
  const aim = 75;
  return (
    <div>
      <div>
        <p className="title">
          本周目標{aim}小時!
          <p>
            {history && (
              <p>
                總工時{" "}
                {history
                  .map((i) => i.amount)
                  .reduce((acc, cur) => acc + cur, 0)}
                小時 日均
                {(
                  history
                    .map((i) => i.amount)
                    .reduce((acc, cur) => acc + cur, 0) / history.length
                ).toFixed(2)}
                小時
              </p>
            )}
          </p>
        </p>
      </div>
      {history.length > 30 && (
        <p>
          過去一個月:{" "}
          {history
            .slice()
            .map((i) => i.amount)
            .reduce((acc, cur) => acc + cur, 0)}
          小時(
          {(
            history
              .slice()
              .map((i) => i.amount)
              .reduce((acc, cur) => acc + cur, 0) / history.length
          ).toFixed(2)}
          )
        </p>
      )}

      {history.length > 6 ? (
        <div>
          <p>
            過去七天
            {history
              .slice(0, 7)
              .map((i) => i.amount)
              .reduce((acc, cur) => acc + cur, 0)}
            小時 日均
            {Math.round(
              (history
                .slice(0, 7)
                .map((i) => i.amount)
                .reduce((acc, cur) => acc + cur, 0) /
                7) *
                100
            ) / 100}
            小時
          </p>
          <p>
            本周進展:
            {history
              .slice(0, week)
              .map((i) => i.amount)
              .reduce((acc, cur) => acc + cur, 0)}
            /{aim}
            <div>
              {7 - week > 0 && (
                <small>
                  剩餘{7 - week}天 日均需達
                  {((aim -
                    history
                      .slice(0, week)
                      .map((i) => i.amount)
                      .reduce((acc, cur) => acc + cur, 0)) /
                    (7 - week)).toFixed(2)}
                  小時
                </small>
              )}
            </div>
          </p>
        </div>
      ) : (
        record > 0 && (
          <div>
            <p>
              過去{record}天:
              {history.map((i) => i.amount).reduce((acc, cur) => acc + cur, 0)}
            </p>
          </div>
        )
      )}
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
          if (record === 0) {
            return;
          }
          const preAmount = totalAmount - history[0]["amount"] || 0;

          const newHis = history.slice(1) || [];
          const newCollectHis = history.slice(1) || [];

          setTotalAmount(preAmount);
          setHistory(newHis);
          setCollectHistory(newCollectHis);
          localStorage.setItem(KEYTotalHrs, preAmount);
          localStorage.setItem(KEYTotalHis, JSON.stringify(newHis));
          localStorage.setItem(KEYCollectHis, JSON.stringify(newCollectHis));
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
          const lsCollected = localStorage.getItem(KEYCollectHis);
          setHistory(lsCollected ? JSON.parse(lsCollected) : []);
          localStorage.setItem(KEYTotalHis, lsCollected);
        }}
      >
        歷史記錄
      </button>

      {history.length > 0 &&
        history.map(({ date, weekDay, amount }, idx) => {
          if (idx < 35) {
            return (
              <p
                className={
                  idx < week ? (amount > 10 ? "week" : "blue") : "nonWeek"
                }
                key={idx}
              >
                {formatDate(date, weekDay, amount)}
              </p>
            );
          }
        })}
    </div>
  );
};

// amount: 10
// date: "2020/12/8"
// weekDay: 2
// 星期: " 星期二 "
