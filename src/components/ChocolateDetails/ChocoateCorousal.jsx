import React, { useState } from 'react';

const ChocolateCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const chocolates = ['chocolate1', 'chocolate2', 'chocolate3', 'chocolate4'];

  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? chocolates.length - 1 : prevIndex - 1
    );
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === chocolates.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='chocolate-carousel'>
      <button className='carousel-button' onClick={handleSwipeLeft}>
        &lt;
      </button>
      <div className='chocolate-details'>
        <div className='image-container'>
          <img src='path/to/image.jpg' alt='Chocolate' />
        </div>
        <div className='details-container'>
          <h2>{chocolates[currentIndex]}</h2>
          <p>Description of the chocolate</p>
          <p>Count: 10</p>
          <p>Price: $10</p>
          <button>Add to Cart</button>
        </div>
      </div>
      <button className='carousel-button' onClick={handleSwipeRight}>
        &gt;
      </button>
    </div>
  );
};

export default ChocolateCarousel;
