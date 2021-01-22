import React, { useState } from "react";
import Row from "./row";

function Board() {
  const [cells, setCells] = useState(Array(9).fill("空"));
  const [isO, setIsO] = useState(false)
  function handleCell(pos,val) {
    setCells([...cells.slice(0, pos), curMark, ...cells.slice(pos + 1)]);
    setIsO(!isO)
  }

  let curMark = isO?"X":"O"
  return (
    <>
      <p>下个标记是{curMark}</p>
      <Row
        pos={[...cells.keys()].slice(0, 3)}
        vals={cells.slice(0, 3)}
        handleIt={handleCell}
        m = {curMark}
      />
      <Row
        pos={[...cells.keys()].slice(3, 6)}
        vals={cells.slice(3, 6)}
        handleIt={handleCell}
        m = {curMark}

      />{" "}
      <Row
        pos={[...cells.keys()].slice(6, 9)}
        vals={cells.slice(6, 9)}
        handleIt={handleCell}
        m = {curMark}

      />
    </>
  );
}

export default Board;
