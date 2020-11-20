import React, { useState, useEffect, useContext, createContext,useRef} from "react";
import useKeyPress from "./usePressKeyHook";
import "./App.css"

const CountContext = createContext();

function Counter() {
  const roll = () =>{
    return Math.floor( Math.random()*15+1)
  }
  const count = useContext(CountContext);
  const [test, setTest] = useState(roll())
  const inputRef = useRef()


  //  (CountContext)/16*10000).toString().split("0")[0])
  useEffect(() => {
    let newNum = roll()
    while (newNum % 2 ===1 || newNum ===parseInt(inputRef.current.innerText)){
      newNum = roll()
    }
    console.log(newNum,((newNum) *10000/ 16).toString().split("0")[0]);
    // console.log(inputRef.current.innerText,"rrrr");
    setTest(newNum)
  }, [count])

  return (
    <>
    {/* <p>{count}</p> */}
      <h1 className="q" ref={inputRef}>{test}</h1>
      {/* <h2>
        {count}/16={((count / 16) * 10000).toString().split("0")[0]}
      </h2> */}
      <p>
        {[...Array(15)].map((i, idx) => {
          // console.log(idx);
          return (
            <p>
              {idx + 1}/16 = {((idx + 1) *10000/ 16).toString().split("0")[0]}
            </p>
          );
        })}
      </p>
    </>
  );
}

function App() {
  const [count, setCount] = useState(1);
  const subPress = useKeyPress("j");
  const addPress = useKeyPress("k");
  const resetPress = useKeyPress("m");

  const addEightPress = useKeyPress("i");
  const subEightPress = useKeyPress("u");

  useEffect(() => {
    resetPress && setCount(1);
    if (count > 15) {
      setCount(1);
    }
    if (count <= 0) {
      setCount(15);
    }
  }, [resetPress, count]);
  // console.log(subPress,addPress);
  return (
    <div>
      {/* {addPress && setTimeout(() => dispatch({ type: "add" }), 250)} */}

      <div style={{ display: "none" }}>
        {subPress && setTimeout(() => setCount(count - 1), 260)}
        {addPress && setTimeout(() => setCount(count + 1), 260)}
        {addEightPress && setTimeout(() => setCount(count + 8), 260)}
        {subEightPress && setTimeout(() => setCount(count - 8), 260)}
      </div>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
}
export default App;
