import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LocalFlorist.scss";

function LocalFlorist() {
  return (
    <div className="LocalFlorist">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div classNamee="card-box ">
              <h5 classNamee="mbr-section-title ">
                Local Florist Just For You
              </h5>
              <p classNamee="mbr-text">
                Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem
                fierent ullamcorper ius no.&nbsp;Te tibique intellegam
                mediocritatem his, est quis.
              </p>
              <p classNamee="mbr-text ">
                <em>Mary Byrd, owner</em>
              </p>
              <div classNamee="si">
                <img
                  classNamee="sign"
                  src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="cardBox">
              <div className="img1">
                <img
                  src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/fl1.jpg"
                  classNamee="first"
                />
              </div>
              <div className="img2">
                <img
                  src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/fl2.jpg"
                  classNamee="second"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalFlorist;
