import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import "./HeaderNavLink.scss";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
HeaderNavLink.propTypes = {
  isPath: PropTypes.array,
};

HeaderNavLink.Props = {
  isPath: [],
};

function HeaderNavLink(props) {
  const { isPath } = props;
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
              <Link to={link.path}>{link.name}</Link>
            </li>
          );
      })}
    </ul>
  );
}

export default HeaderNavLink;
