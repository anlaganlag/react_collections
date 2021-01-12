import React from "react";
import "./App.css";

import Home from "./pages/Home";//主頁
import Rooms from "./pages/Rooms";//所有房間
import SingleRoom from "./pages/SingleRoom";//房間詳情
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
