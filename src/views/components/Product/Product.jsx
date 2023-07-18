import React from 'react';
import PropTypes from 'prop-types';


import './Product.scss'
Product.propTypes = {
 dataProduct: PropTypes.object
};

Product.props = {
 dataProduct: {}
}
function Product(props) {
 const data = props.dataProduct;
 return (
   <div className="product__item">
     <div className="product__image" style={{'backgroundImage': `url('${data.image}')`,}}></div>
     <div className="product__content">
      <h3 className="product__name">{data.mangaName}</h3>
     </div>
    </div>
 );
}

export default Product;