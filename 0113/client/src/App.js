//用了副作用和狀態的鉤子
import React, { useEffect, useState } from "react";

//用的bt的導航欄,導航項目,導航鏈接,..
import { Navbar, NavItem, NavLink, NavbarBrand, Nav } from "reactstrap";
import Input from "./components/Input";
import Timer from "./components/Timer";
import Stats from "./components/Stats";
import Chart from "./components/Chart";
//從在線的網站獲取實時數據和更新數據
import { getData, postData } from "./requests";
function App() {
  // 時間倒數60
  const [time, setTime] = useState(60);
  //默認沒有開啓計時器
  const [startTimer, setStartTimer] = useState(false);
  // 查看數據狀態..起始沒有數據
  const [stats, setStats] = useState([]);
  //彈窗默認不出現
  const [modalIsOpen, modalToggle] = useState(false);
  //裝下載數據的容器..默認爲空
  const [data, setData] = useState([]);
  //異步函數方便後面用await..即能讓函數等待執行完畢
  const startCountdown = async () => {
    for (let i = 59; i >= 0; i--) {
      // 每次進入for循環先等1s鍾再設置時間,
      //所以這就是等一秒的代碼
      await new Promise((r) => setTimeout(r, 1000));
      setTime(i);
    }
    //倒數完畢後將開啓計時器關閉..即關閉計時器..
    setStartTimer(false);
  };
  //監測時間的副作用...如果倒數結束顯示彈窗,再初始化時間爲60
  useEffect(() => {
    if (time === 0) {
      //display modal with stats when time runs out
      modalToggle(true);

      //on closing it, reset time
      setTime(60);
    }
  }, [time]);

  useEffect(() => {
    //retrieve data
    getData(setData);
  }, []);
  //最後將數據上傳..

  useEffect(() => {
    //stats only updated at end of a session, send data to backend
    if (stats !== []) {
      const wpm = stats[0];
      postData(setData, wpm);
    }
  }, [stats]);

  return (
    <>
      <Navbar light color="light">
        <NavbarBrand>Type Type</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/Ta7ar/Typing-Stats">
              Github
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <p
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          color: "grey",
          marginTop: "10px",
        }}
      >
        Typing speed test
      </p>
      <h2 style={{ textAlign: "center" }}>Test your typing skills ⚡</h2>
      <Timer>{time}</Timer>
      <Input
        signalStart={() => {
          if (!startTimer) {
            setStartTimer(true);
            startCountdown();
          }
        }}
        time={time}
        setStats={setStats}
      />
      <Stats
        isOpen={modalIsOpen}
        toggle={async () => {
          modalToggle(false);
        }}
        stats={stats}
      />
      <Chart data={data} />
    </>
  );
}

export default App;
