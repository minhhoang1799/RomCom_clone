import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Collection.scss'
Collection.propTypes = {
 collection: PropTypes.object,
 handleLink: PropTypes.func
};

Collection.props = {
 collection: {},
 handleLink: []
}

function Collection(props) {
  const [active,setActive] = useState(false)
  const {data, handleLike} = props;

  const isActive = (id) => {
    active ? setActive(false) : setActive(true)
   return handleLike(id,!active)
  }
 return (
  <div className="block01__item">
   <div className="block01__item--top">
     <p className="image">
      <img src={data.image} alt="" />
     </p>
      <div onClick={() => isActive(data.id)} className={`liked ${active ? "active" : ''}`}><i className="fa-regular fa-heart"></i></div>
   </div>
   <div className="block01__item--center">
    <h3 className="block01__item--name">{data.name}</h3>
    <a href={data.link} target="_blank" rel="noopener" className="block01__item--link">{data.link}</a>
    <p className="block01__item--des">{data.description}</p>
   </div>
  </div>
 );
}

export default Collection;