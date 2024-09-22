import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import Image1 from './Images/Image1.jpeg';
import Image2 from './Images/Image2.jpeg';
import Image3 from './Images/Image3.jpeg';
import Image4 from './Images/Image4.jpeg';

const images = [Image1, Image2, Image3, Image4];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide images forward
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper">
      <h1 className="ride-text">Ride Peacefully...</h1>
      <div className="slider-container">
        {images.map((image, index) => {
          // Calculate the position of each image relative to the current index
          let position = 'nextSlide';
          if (index === currentIndex) {
            position = 'activeSlide';
          } else if (index === (currentIndex - 1 + images.length) % images.length) {
            position = 'prevSlide';
          }

          return (
            <div className={`slide ${position}`} key={index}>
              <img src={image} alt={`Slide ${index}`} className="slide-image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
