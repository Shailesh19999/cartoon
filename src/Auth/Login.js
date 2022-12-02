import React from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [inputval, Setinputval] = useState({
    email: "",
    password: "",
  });
  const getdata = (e) => {
    const { value, name } = e.target;
    Setinputval(() => {
      return {
        ...inputval,
        [name]: value,
      };
    });
  };
  const handleLogin = (e) => {
    // save in local storage
    e.preventDefault();
    const getuserdata = JSON.parse(localStorage.getItem("user"));
    if (
      inputval.email === getuserdata.email &&
      inputval.password === getuserdata.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("invalid user");
    }
  };

  return (
    <>
      <h4 className="text-center mt-4">login</h4>
      <form>
        <div className="mb-3 mt-4" id="single">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={getdata}
            name="email"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={getdata}
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
