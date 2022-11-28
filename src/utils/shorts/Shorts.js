import React from "react";
import data from "./Shortsdata";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Shorts = () => {
  const [items, setItems] = useState(data);
  return (
    <>
      <div className="container ">
        <h5 className="mt-5 mx-2 my_home">
          Short Reads
          <span>
            <ArrowForwardIcon />
          </span>
        </h5>
        <hr />
        <div className="row my-2">
          {items.map((e) => {
            const { image, tittle, text, id } = e;
            return (
              <>
                <div className="col-md-4 col-12 ">
                  <div class="card my-4" key={id}>
                    <div className="d-flex">
                      <img
                        src={image}
                        class="card-img-top"
                        alt="..."
                        style={{ width: "195px" }}
                      />
                      <div class="card-body">
                        <h5 class="card-title" id="final">
                          {tittle}
                        </h5>
                        <p class="card-text">{text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shorts;
