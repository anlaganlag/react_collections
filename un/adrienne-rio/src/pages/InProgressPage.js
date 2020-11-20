import React from "react";

export default function InProgressPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1 style={{ alignSelf: "center", fontFamily: "IBM Plex Sans" }}>
        Sorry, page still in progress...
      </h1>
      <span style={{ alignSelf: "center", fontSize: 100 }} role="img">
        🚧
      </span>
    </div>
  );
}
