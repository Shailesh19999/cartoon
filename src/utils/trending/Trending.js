import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import data from "./Trendingdata";

const Trending = () => {
  const [items, setItems] = useState(data);
  console.log(items);
  return (
    <>
      <div className="container w-100">
        <h5 className="mt-5 mx-2 my_home">
          Now Tranding
          <span>
            <ArrowForwardIcon />
          </span>
        </h5>
        <hr />
        <div className="row ms-2">
          {items.map((e) => {
            const { image, left_para, right_para, heading, main_para, id } = e;
            return (
              <>
                <div className="col-md-4 col-sm-4 col-12" key={id}>
                  <div
                    className="card"
                    id="trending"
                    style={{ width: "330px" }}
                  >
                    <img
                      src={image}
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                    <div className="card-body">
                      <p>
                        {left_para}
                        <span className="mx-3">{right_para}</span>
                      </p>
                      <h5 className="card-title">{heading}</h5>
                      <p className="card-text">{main_para}</p>
                      <p>
                        12 Min Read
                        <span className="read">
                          Read full <ArrowForwardIcon />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <hr />
      </div>
    </>
  );
};

export default Trending;
