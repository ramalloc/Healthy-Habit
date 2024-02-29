import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Access the slider instance and modify its behavior
    if (sliderRef.current) {
      // For example, pause the autoplay on mouse hover
      sliderRef.current.slickPause();

      // Resume autoplay when mouse leaves the carousel
      const handleMouseLeave = () => {
        sliderRef.current.slickPlay();
      };

      sliderRef.current.innerSlider.list.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        // Cleanup event listener to avoid memory leaks
        sliderRef.current.innerSlider.list.removeEventListener('mouseleave', handleMouseLeave);
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
    adaptiveHeight: true, // Adjust slide height based on content
    cssEase: 'linear', // Enable smoother transition
    // Set the height of the carousel to 100vh (full screen height)
    height: '100vh',
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
      src: 'https://shorturl.at/kELY0',
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
              <img src={image.src} alt={image.alt} className="carousel-image" style={{ width: '100%', height: '80vh', objectFit: 'cover' }} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
