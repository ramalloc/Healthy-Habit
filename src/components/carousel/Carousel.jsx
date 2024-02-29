import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleMouseLeave = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPlay();
      }
    };

    if (sliderRef.current) {
      sliderRef.current.slickPause();
      sliderRef.current.innerSlider.list.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        if (sliderRef.current) {
          sliderRef.current.innerSlider.list.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }
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
    // Set the height of the carousel to 80vh (80% of the viewport height)
    height: '80vh',
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
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings} className="carousel-slider">
        {images.map(image => (
          <div key={image.id}>
            <Link to={image.link}>
              <img src={image.src} alt={image.alt} className="carousel-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
