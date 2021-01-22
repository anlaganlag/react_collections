import React from "react";

function Cell({ val, handleIt }) {
  return (
    <button
      onClick={() => {
        if (val !== null) {
          return;
        }
        handleIt(val);
      }}
    >
      {val}
    </button>
  );
}

export default Cell;
