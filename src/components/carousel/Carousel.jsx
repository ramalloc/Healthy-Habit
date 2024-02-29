import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const sliderRef = useRef(null);
  const [carouselHeight, setCarouselHeight] = useState('80vh'); // Initial height

  useEffect(() => {
    const calculateCarouselHeight = () => {
      if (sliderRef.current) {
        const firstImage = sliderRef.current.innerSlider.list.querySelector('.carousel-image');
        if (firstImage) {
          const { naturalWidth, naturalHeight } = firstImage;
          const aspectRatio = naturalWidth / naturalHeight;
          const newHeight = `${window.innerWidth / aspectRatio}px`; // Adjusted height based on aspect ratio and viewport width
          const maxHeight = Math.min(window.innerHeight * 0.8, parseFloat(newHeight)); // Set a maximum height relative to the viewport height
          setCarouselHeight(`${maxHeight}px`);
        }
      }
    };

    const handleResize = () => {
      calculateCarouselHeight();
    };
    window.addEventListener('resize', handleResize);

    calculateCarouselHeight();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    cssEase: 'linear',
    height: carouselHeight,
  };

  const images = [
    {
      id: 1,
      src: 'https://rb.gy/2v9xww',
      alt: 'Image 1',
      link: '/allProducts'
    },
    {
      id: 2,
      src: 'https://rb.gy/iogrf6',
      alt: 'Image 2',
      link: '/allProducts'
    },
    {
      id: 3,
      src: 'https://shorturl.at/ehiH3',
      alt: 'Image 3',
      link: '/allProducts'
    }
  ];

  return (
    <div className="carousel-container" style={{ maxHeight: '80vh', overflow: 'hidden' }}>
      <Slider ref={sliderRef} {...settings} className="carousel-slider">
        {images.map(image => (
          <div key={image.id}>
            <Link to={image.link}>
              <img
                src={image.src}
                alt={image.alt}
                className="carousel-image"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
