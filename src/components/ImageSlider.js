import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

import Image1 from './Images/Image1.jpeg';
import Image2 from './Images/Image2.jpeg';
import Image3 from './Images/Image3.jpeg';
import Image4 from './Images/Image4.jpeg';

const images = [Image1, Image2, Image3, Image4];

const ImageSlider = ({ scale = 1, position = 'center' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const scaleClass = `scale-${scale.toString().replace('.', '-')}`;
  const positionClass = `position-${position}`;

  return (
    <div className={`slider-container ${scaleClass} ${positionClass}`}>
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={`slide-image ${index === currentIndex ? 'active' : (index === (currentIndex - 1 + images.length) % images.length) ? 'prev' : 'next'}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
