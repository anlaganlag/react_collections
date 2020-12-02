import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useRef,
} from "react";
import useKeyPress from "./usePressKeyHook";
import "./App.css";

const CountContext = createContext();

function Counter() {
  const count = useContext(CountContext);
  const [test, setTest] = useState(1);
  const inputRef = useRef();

  const resFormat = (idx) =>
    (((idx + 1) * 10000) / 16).toString().split("0")[0];

  useEffect(() => {
    const getRandom = () => {
      let newNum = Math.ceil(Math.random() * 2);
      //如果是偶數和前一個不同時返回
      if (newNum !== +inputRef.current.innerText) {
        return newNum;
      } else {
        return getRandom();
      }
    };
    const newNum = getRandom();
    console.log(newNum);
    setTest(newNum)
  }, [count]);

  return (
    <>
      <p>{count}</p>
      <h1 className="q" ref={inputRef}>
        {test}
      </h1>
      {/* <h2>
        {count}/16={((count / 16) * 10000).toString().split("0")[0]}
      </h2> */}
      <p>
        {[...Array(15)].map((i, idx) => {
          // console.log(idx);
          return <p>{idx + 1 + " " + resFormat(idx)}</p>;
        })}
      </p>
    </>
  );
}

function App() {
  const [count, setCount] = useState(1);
  const addPress = useKeyPress("k");
  const subPress = useKeyPress("j");

  // console.log(subPress,addPress);
  return (
    <div>
      {/* {addPress && setTimeout(() => dispatch({ type: "add" }), 250)} */}

      <div style={{ display: "none" }}>
        {subPress && setTimeout(() => setCount(count - 1), 260)}
        {addPress && setTimeout(() => setCount(count + 1), 260)}
        hi
      </div>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
}
export default App;
