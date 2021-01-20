import React, { useState, useEffect } from "react";
import Start from "../components/Start";
import Footer from "./Footer";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Navbar from "../components/Navbar";

const Root = () => {
  const [start, setStart] = useState(true);
  useEffect(() => {
    console.log("ok");
    setTimeout(() => {
      setStart(false);
    }, 3000);
  }, []);

  return (
    <div
      style={{
        fontFamily: "poppins",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          background: " rgb(14, 14, 19)",
          overflow: "hidden",
        }}
      >
        <>
          {start && <Start />}
          {!start && (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {/* <p
              style={{
                color: "white",
                position: "absolute",
                bottom: "10%",
                right: "5%",
              }}
            >
              hello
            </p> */}
              <Navbar />
              <Section1 />
              <Section2 />
              <Section3 />
              <Footer />
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Root;
