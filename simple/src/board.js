import React, { useState } from "react";
import Row from "./row";

function Board() {
  const [cells, setCells] = useState(Array(9).fill(1));
  function handleCell(pos,val) {
    setCells([...cells.slice(0, pos), cells[pos]+1, ...cells.slice(pos + 1)]);
  }

  return (
    <>
      <Row
        pos={[...cells.keys()].slice(0, 3)}
        vals={cells.slice(0, 3)}
        handleIt={handleCell}
      />
      <Row
        pos={[...cells.keys()].slice(3, 6)}
        vals={cells.slice(3, 6)}
        handleIt={handleCell}
      />{" "}
      <Row
        pos={[...cells.keys()].slice(6, 9)}
        vals={cells.slice(6, 9)}
        handleIt={handleCell}
      />
    </>
  );
}

export default Board;
