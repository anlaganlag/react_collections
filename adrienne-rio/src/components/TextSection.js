import React from "react";

export default function TextSection(props) {
  return (
    <div
      style={{
        marginTop: 100,
      }}
    >
      <div
        style={{
          marginRight: 50,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "4vw",
            fontFamily: "TT Commons Bold",
          }}
        >
          <span role="img" style={{ fontSize: 40 }}>
            {props.emoji}
          </span>
          &nbsp;{props.title}
        </h1>

        {props.children}
      </div>
    </div>
  );
}
