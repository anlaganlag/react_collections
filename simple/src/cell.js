import React from "react";

function Cell({ pos, val, handleIt,m }) {

  return (
    <span
      onClick={(e) => {
        if (val!=="空"){return}
        console.log("pos,val", e,pos, val);
        handleIt(pos);
      }}
    >
      {val}
    </span>
  );
}

export default Cell;
