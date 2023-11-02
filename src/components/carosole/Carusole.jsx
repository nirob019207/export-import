import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Caruosole.css";
import Img1 from '../image/1.png';
import Img2 from '../image/2.png';
import Img3 from '../image/7.jpg';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000} // Auto play interval in milliseconds
        className="custom-carousel"
      >
        <div>
          <img src={Img1} alt="Product 1" />
          <p className="legend">Product 1</p>
        </div>
        <div>
          <img src={Img2} alt="Product 2" />
          <p className="legend">Product 2</p>
        </div>
        <div>
          <img src={Img3} alt="Product 3" />
          <p className="legend">Product 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
