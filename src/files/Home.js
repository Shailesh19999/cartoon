import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  return (
    <>
      <div className="container w-100 ">
        <h5 className="mt-5 mx-2 my_home">New & Trendy</h5>
        <hr /> ;
        <div className="row ms-2  ">
          <div className=" col-md-6 col-12 ">
            <div className="card" style={{ width: "650px" }}>
              <img
                src="../images/Rectangle 39.png"
                className="card-img-top img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div className=" col-md-6 col-12">
            <div className="card" style={{ width: "650px" }}>
              <img
                src="../images/Rectangle 41.png"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body" id="cart">
                <p>
                  Fantasy<span className="mx-3">1Month ago</span>
                </p>
                <h5 className="card-title">Attack on titans</h5>
                <p className="card-text">
                  The CSS Grid Layout Module offers a grid-based layout system,
                  with rows and columns, making it easier to design web pages
                  without having to use floats and positioning.
                </p>
                <p>
                  12 Min Read
                  <span className="read">
                    Read full <ArrowForwardIcon />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-12">
            <div className="card" style={{ width: "650px" }}>
              <img
                src="../images/Rectangle 41.png"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body" id="cart">
                <p>
                  Fantasy<span className="mx-3">1Month ago</span>
                </p>
                <h5 className="card-title">Attack on titans</h5>
                <p className="card-text">
                  The CSS Grid Layout Module offers a grid-based layout system,
                  with rows and columns, making it easier to design web pages
                  without having to use floats and positioning.
                </p>
                <p>
                  12 Min Read
                  <span className="read">
                    Read full <ArrowForwardIcon />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-12">
            <div className="card" style={{ width: "650px" }}>
              <img
                src="../images/Rectangle 42.png"
                className="card-img-top img-fluid"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
