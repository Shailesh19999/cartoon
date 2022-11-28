import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Footer = () => {
  return (
    <div>
      <div className="container-fluid" id="footer">
        <div className="row">
          <div className="col-md-6 col-12 last_logo">
            <img src="../images/Logo.png" alt="" />
            <p className="footer_para">
              Gates is a blog that focuses on Japanese art and anime. They
              feature information on Otaku conventions and other anime topics.
              Hear from famous anime filmmakers and artists as well as plenty of
              news about the art of cartoon creation in the Japanese culture.
            </p>
          </div>
          <div className="col-md-6 col-12">
            <div className="footer_input">
              <button className="mt-2 mx-2 subscribe_btn">susbscribe</button>
              <input
                type="text"
                placeholder="Enter our email"
                className="input_box mx-2"
              />
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
        <hr className="text-white" />
        <p className="text-white my-3 mx-4">@copyright 2021 Gates</p>
        <hr className="text-white" />
      </div>
    </div>
  );
};

export default Footer;
