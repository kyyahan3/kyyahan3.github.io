import React from 'react';
import { Carousel } from 'antd';
import styles from './Carousel.module.css';

const CarouselComponent = ({ images }) => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel autoplay>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
