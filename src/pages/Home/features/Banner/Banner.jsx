import React from "react";

import "./Banner.scss";
Banner.propTypes = {};

function Banner() {
  return (
    <section className="home__banner home__bg">
      <div className="inner">
        <div className="container">
          <div className="home__banner--wrapper">
            <div className="home__banner--left">
              <h2>
                Đọc manga tại <br />
                <span className="is_color">RomCom</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
