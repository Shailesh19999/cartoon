import React from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const Signup = () => {
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
  const handleSubmit = (e) => {
    // save in local storage
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(inputval));
    navigate("/login");
  };

  return (
    <>
      <h4 className="text-center mt-4">Sign up</h4>
      <form>
        <div className="mb-3 mt-4" id="single">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={getdata}
            name="name"
          />
        </div>
        <div className="mb-3 mt-4">
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

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;
