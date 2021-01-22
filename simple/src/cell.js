import React from "react";

function Cell({ pos, val, handleIt }) {
  return (
    <span
      onClick={(e) => {
        console.log("pos,val", e,pos, val);
        handleIt(pos, val);
      }}
    >
      格子
    </span>
  );
}

export default Cell;
