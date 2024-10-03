import React from 'react';
import './PeopleAlsoBought.css';
import image1 from '../../download.jpg';

const products = [
  {
    title: 'For Your Twin At Heart : Raksha Bandhan Hamper',
    price: '₹1,000.00',
    image: image1,
  },
  {
    title: 'For Your Workout Partner : Raksha Bandhan Hamper',
    price: '₹2,500.00',
    image: image1,
  },
  {
    title: 'For Your Cheerleader : Raksha Bandhan Hamper',
    price: '₹1,800.00',
    image: image1,
  },
  {
    title: 'For Your Secret Keeper : Raksha Bandhan Hamper',
    price: '₹3,500.00',
    image: image1,
  },
  {
    title: 'Rakhi By JaiVakeel Foundation',
    price: '₹30.00',
    image: image1,
  },
  {
    title: 'Raksha Bandhan Hamper',
    price: '₹349.00',
    image: image1,
  },
];

const PeopleAlsoBought = () => {
  return (
    <div className='people-also-bought'>
      <h2>People Also Bought</h2>
      <p>
        Here's some of our most similar products people are buying. Click to
        discover trending style.
      </p>
      <div className='product-list'>
        {products.map((product, index) => (
          <div key={index} className='product-card'>
            <img src={product.image} alt={product.title} />
            <h3>GIFT HAMPERS</h3>
            <p>{product.title}</p>
            <p className='price'>{product.price}(inclusive of taxes)</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleAlsoBought;
