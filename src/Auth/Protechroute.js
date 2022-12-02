import React from "react";
import { Navigate } from "react-router-dom";
import Myhome from "../Myhome";

const Protechroute = () => {
  const auth = localStorage.getItem("loggedin");
  return auth ? <Myhome /> : <Navigate to={"/signup"} />;
};

export default Protechroute;
