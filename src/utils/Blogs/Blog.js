import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import data from "../shorts/Shortsdata";
import { useState } from "react";
const Blogdata = () => {
  const [items, setItems] = useState(data);
  return (
    <>
      <div className="container ">
        <h5 className="mt-5 mx-2 my_home">Blog</h5>
        <hr />
        <div className="row my-2">
          <div className="col-md-6">
            <div className="middle_section">
              <ul>
                <li>comedy</li>
                <li>fantasy</li>
                <li>drama</li>
                <li>action</li>
                <li>history</li>
                <li>military</li>
              </ul>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ms-2">
          <div className="col-md-4 col-sm-4 col-12">
            <div className="card" id="blogs" style={{ width: "330px" }}>
              <img
                src="../images/Rectangle 33.png"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <p>1 Month ago</p>
                <h5 className="card-title">Attack On Titans</h5>
                <p className="card-text">
                  lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas
                  eleifend sed ex. Donec quis magna sed felis elementum blandit
                  nec quis sem. Maecen.
                </p>
                <p>
                  <span className="load_more">
                    Load more <ArrowForwardIcon />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4 col-6 ">
            {items.map((e) => {
              const { image, tittle, text, id } = e;
              return (
                <>
                  <div class="card my-4" key={id}>
                    <div className="d-flex flex_dr">
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
                        <p class="card-text" id="my_txtt">
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {/* right */}
          <div className="col-md-4 col-sm-4 col-6 ">
            {items.map((e) => {
              const { image, tittle, text, id } = e;
              return (
                <>
                  <div class="card my-4" key={id}>
                    <div className="d-flex flex_dr">
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
                        <p class="card-text" id="my_txtt">
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogdata;
{
}
