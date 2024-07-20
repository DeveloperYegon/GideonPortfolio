import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile from '../assets/GideonYegon.jpg';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container" style={{ width: '80%', margin: '0 auto' }}>
      <Slider {...settings}>
        <div>
          <img className='rounded' src="" alt="Slide 1" />
        </div>
        <div>
          <img src="" alt="Slide 2" />
        </div>
        <div>
          <img src="" alt="Slide 3" />
        </div>
        <div>
          <img src="" alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
