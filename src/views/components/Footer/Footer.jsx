import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom";

import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="container">
          <div className="footer__wrapper">
            <p className="footer__logo">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 512 512"
                >
                  <ellipse
                    cx="405.143"
                    cy="338.571"
                    fill="#00A3AC"
                    rx="82.857"
                    ry="82.857"
                  ></ellipse>
                  <path
                    fill="#fff"
                    d="M114.742 355.332H256v66.097H24v-61.376l140.323-203.956H24V90h232v61.376L114.742 355.332z"
                  ></path>
                </svg>
              </Link>
            </p>
            <p className="footer__copyright">
              &#169; 2021. All rights reserved. Clone by github
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
