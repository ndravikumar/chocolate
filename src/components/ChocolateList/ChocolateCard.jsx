import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChocolateCard = (props) => {
  const { id, photo, price, chocolateName, count, setCart, pricePerUnit } =
    props;
  const [quantity, setQuantity] = React.useState(count);
  const [calculatePrice, setCalculatePrice] = React.useState(price.toFixed(2));

  const navigate = useNavigate();

  const addToCart = (item) => {
    console.log('Added to cart', item);
    setCart((prev) => [...prev, item]);
  };

  const navigateToDetails = () => {
    navigate(`/chocolate-details/:${id}`);
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    setQuantity((prev) => prev + 1);
    setCalculatePrice((prev) =>
      (Number(prev) + Number(pricePerUnit)).toFixed(2)
    );
  };

  const handleMinus = (e) => {
    e.stopPropagation();
    setQuantity((prev) => (prev >= count ? prev - 1 : count));
    setCalculatePrice((prev) =>
      (Number(prev) - Number(pricePerUnit)).toFixed(2)
    );
  };

  return (
    <div className='chocolate-card'>
      <img src={photo} alt='Chocolate' className='chocolate-card__photo' />
      <p className='chocolate-card__title'>{chocolateName}</p>
      <p className='chocolate-card__price'>&#x20B9;{calculatePrice}</p>
      <div className='chocolate-card_container'>
        <button
          className='chocolate-card__remove'
          disabled={quantity === count}
          onClick={handleMinus}
        >
          -
        </button>
        <p className='chocolate-card__quantity'>{quantity}</p>
        <button className='chocolate-card__add' onClick={handleAdd}>
          +
        </button>
      </div>
      <button
        className='chocolate-card__add-to-cart'
        onClick={() =>
          addToCart({ id, photo, price, chocolateName, count, pricePerUnit })
        }
      >
        Add to Cart
      </button>
      <button
        className='chocolate-card__add-to-cart'
        onClick={navigateToDetails}
      >
        View Details
      </button>
    </div>
  );
};

export default ChocolateCard;
