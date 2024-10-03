import React from 'react';
import './chocolateList.css';
import { chocolates } from '../../utils';
import ChocolateCard from './ChocolateCard';

const ChocolateList = ({ setCart }) => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const handleDropdownChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const sortChocolates = (chocolates) => {
    return chocolates.filter((chocolate) => {
      if (selectedCategory === 'all') {
        return true;
      }
      return chocolate.category === selectedCategory;
    });
  };
  return (
    <>
      <div className='category-dropdown'>
        <select onChange={handleDropdownChange} className='navbar-dropdown'>
          <option value='all'>All</option>
          <option value='normal'>Normal</option>
          <option value='dryFruit'>Dry fruit</option>
          <option value='special'>Special</option>
        </select>
      </div>
      <div className='chocolate-list'>
        {sortChocolates(chocolates).map((chocolate) => {
          return (
            <ChocolateCard
              id={chocolate.id}
              photo={chocolate.photo}
              price={chocolate.price}
              chocolateName={chocolate.chocolateName}
              count={chocolate.count}
              setCart={setCart}
              pricePerUnit={chocolate.pricePerUnit}
            />
          );
        })}
      </div>
    </>
  );
};

export default ChocolateList;
