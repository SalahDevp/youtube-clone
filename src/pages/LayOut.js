import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import React from "react";

const LayOut = () => {
  return (
    <div className="App">
      <Nav />
      <div style={{ marginTop: "80px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default LayOut;
