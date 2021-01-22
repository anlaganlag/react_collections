import React from "react";

function Cell({ pos, val, handleIt,m }) {

  return (
    <span
      onClick={(e) => {
        console.log("pos,val", e,pos, val);
        handleIt(pos, val);
      }}
    >
      {val}
    </span>
  );
}

export default Cell;
