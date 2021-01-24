import React, { useState } from "react";
import Cell from "./cell";

function Board() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [isO, setIsO] = useState(true);
  function handleCell(pos) {
    setCells([...cells.slice(0, pos),  isO ? "O" : "X", ...cells.slice(pos + 1)]);
    setIsO(!isO);
  }

  function renderCell(pos) {
    return <Cell val={cells[pos]} handleIt={() => handleCell(pos)} />;
  }
  return (
    <>
      <p>下个标记是{isO?"O":"X"}</p>

      <div className="row">
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
      </div>

      <div className="row">
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
      </div>
      <div className="row">
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
    </>
  );
}

export default Board;
