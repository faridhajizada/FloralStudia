import React from "react";
import "./WatchOfChoice.css";

function WatchOfChoice() {
  return (
    <div classNameName="watch-area section-padding30">
      <div className="container">
        <div className="row align-items-center justify-content-between padding-130 watchMargin ">
          <div className="col-lg-5 col-md-6">
            <div className="watch-details mb-40">
              <h2>Watch of Choice</h2>
              <p>
                Enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.
              </p>
              <a href="shop.html" className="btn">
                Show Watches
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-10">
            <div className="choice-watch-img mb-40">
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between watchMargin ">
          <div className="col-lg-6 col-md-6 col-sm-10">
            <div className="choice-watch-img mb-40">
              <img
                src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch2.png.webp"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="watch-details mb-40">
              <h2>Watch of Choice</h2>
              <p>
                Enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.
              </p>
              <a href="shop.html" className="btn">
                Show Watches
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchOfChoice;
