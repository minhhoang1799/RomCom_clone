import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import "./HeaderNavLink.scss";
HeaderNavLinkSp.propTypes = {
  isPath: PropTypes.array,
  handleClickLink: PropTypes.func,
};

HeaderNavLinkSp.Props = {
  isPath: [],
  handleClickLink: null,
};

function HeaderNavLinkSp(props) {
  const { isPath, handleClickLink } = props;
  const location = useLocation();
  return (
    <ul>
      {isPath.map((link) => {
        if (link.path)
          return (
            <li
              key={link.key}
              className={link.path === location.pathname ? "active" : ""}
            >
              <Link to={link.path} onClick={() => handleClickLink()}>
                {link.name}
              </Link>
            </li>
          );
      })}
    </ul>
  );
}

export default HeaderNavLinkSp;
