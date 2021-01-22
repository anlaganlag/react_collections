import React, { useState } from "react";
import Row from "./row";

function Board() {
  const [cells, setCells] = useState([1,2,3,4,5,6,7,8,9]);

  return (
    <>
      <Row vals ={cells.slice(0,3)}/>
      <Row vals ={cells.slice(3,6)}/>
      <Row vals ={cells.slice(6,9)}/>
    </>
  );
}

export default Board;
