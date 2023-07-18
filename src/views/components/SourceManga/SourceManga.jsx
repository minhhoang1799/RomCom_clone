import React, { useEffect, useRef } from 'react';
import  Swiper  from 'swiper';
import 'swiper/css';
import './SourceManga.scss'
import PropTypes from 'prop-types';
import Product from '../Product/Product';

SourceManga.propTypes = {
 title: PropTypes.string,
 name: PropTypes.string,
 description: PropTypes.string,
 data: PropTypes.array
};

SourceManga.props = {
 title: '',
 name: '',
 description: '',
 data: []
}
function SourceManga(props) {
 const {title, name, description, data} = props;
   const swiperRef = useRef(null);
  const handlePrev = () => {
   if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }
   const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
    loop: true,
    autoplay: false,
    spaceBetween: 20,
    speed: 1000,
     autoResize: false,
     slidesPerView: 'auto',
     navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    });
  }, []);
 return (
  <div className="inner">
    <div className="container">
      <div className="slider slider__row">
         <div className="slider__col4">
           <div className="slider__content">
            <h3 className="slider__title">
             <span>{name}</span><br />
             {title}
            </h3>
            <p className="slider__des">{description}</p>
           </div>
           <div className="slider__navigation">
             <div className="swiper-btn swiper-prev" onClick={handlePrev}>
               <i className="fa-solid fa-arrow-left-long"></i>
             </div>
             <div className="swiper-btn swiper-next" onClick={handleNext}>
                <i className="fa-solid fa-arrow-right-long"></i>
             </div>
           </div>
         </div>
         <div className="slider__col8">
          <div className="slider__swiper">
          <div className="swiper-container swiper">
            <div className="swiper-wrapper">
             {
              data.map((item) => (
                <div className="swiper-slide" key={`slider_${item.id}`}>
                 <Product dataProduct={item}></Product>
                </div>
              ))
             }
            </div>
          </div>
          </div>
         </div>
      </div>
    </div>
  </div>
 );
}

export default SourceManga;