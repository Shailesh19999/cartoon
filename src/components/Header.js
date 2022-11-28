import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Header = () => {
  return (
    <>
      <div className="header_images">
        <img src="../images/Group 1.jpg" alt="" />
      </div>
      <div className="header_text">
        <h1>Welcome to Gates</h1>
        <p>
          Get the latest news on your favourite mangas, anime and manhwa around
          the world!
        </p>
        <div className="container_input">
          <button className="mt-2 mx-2 subscribe_btn">susbscribe</button>
          <input
            type="text"
            placeholder="Enter our email"
            className="input_box mx-2"
          />
          <ArrowForwardIcon />
        </div>
      </div>
      <div className="right_txt">
        <ul>
          <li>Action</li>
          <li>Comedy</li>
          <li>Drama</li>
          <li>Milltary</li>
          <li>Fantasy</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
