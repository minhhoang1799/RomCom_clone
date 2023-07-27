import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import "./HeaderNavLink.scss";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
HeaderNavLink.propTypes = {
  isPath: PropTypes.array,
  category: PropTypes.array
};

HeaderNavLink.Props = {
  isPath: [],
  category: []
};

function HeaderNavLink(props) {
  const { isPath, category } = props;
  const [active, setActive] = useState(false);
  const handleActive = () => {
    !active ? setActive(true) : setActive(false)
  }
  const location = useLocation();
  return (
    <ul className="header__list--nav">
      {isPath.map((link) => {
        if (link.path)
          return (
            <li
              key={link.key}
              className={link.path === location.pathname ? "active" : ""}
            >
              {!link.isSupNav
              ? <Link to={link.path}>{link.name}</Link>
              : <>
                <a className="ml-0" onClick={() => {handleActive()}} onMouseEnter={() => setActive(true)}>{link.name}</a>
                <ul className={active ? "header__nav--child active" : "header__nav--child"} onMouseLeave={() => setActive(false)}>
                  {category.map((item) => (
                    <li key={item}><Link to={`${link.path}?cate=${item}`}>{item}</Link></li>
                  ))}
                </ul>
              </>
              }
            </li>
          );
      })}
    </ul>
  );
}

export default HeaderNavLink;
