import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import hamperImage from '../../download.jpg';
import { chocolates } from '../../utils';
import './chocolateDetails.css';
import PeopleAlsoBought from '../PeopleAlsoBought';

const ChocolateDetails = () => {
  const { id } = useParams();

  const chocolate = useMemo(() => {
    return chocolates.find(
      (chocolate) => chocolate.id === Number(id.split(':')[1])
    );
  }, [id]);
  console.log(chocolates, id, chocolate, id.split(':')[1]);

  return (
    <>
    <div className={'container'}>
      <div className={'imageSection'}>
        <img
          src={hamperImage}
          alt='Raksha Bandhan Hamper'
          className={'image'}
        />
      </div>
      <div className={'detailsSection'}>
        <div className={'title'}>{chocolate?.chocolateName}</div>
        <div className={'price'}>₹{chocolate?.price} (Inclusive of taxes)</div>
        <div className={'description'}>
          This hamper contains:
          <ul className={'list'}>
            <li className={'listItem'}>
              15 X Loose Elvan (Country of Origin - Turkey)
            </li>
            <li className={'listItem'}>
              1 X Open Potli Round (Country of Origin - India)
            </li>
            <li className={'listItem'}>
              1 X Jaivakeel Rakhi (Country of Origin - India)
            </li>
          </ul>
        </div>
        <div className={'sku'}>SKU: 1CG0741</div>
        <div className='chocolate-button_container'>
          <div className='chocolate-card_container'>
            <button
              className='chocolate-card__remove'
              // disabled={quantity === count}
              // onClick={handleMinus}
            >
              -
            </button>
            <p className='chocolate-card__quantity'>100</p>
            <button className='chocolate-card__add'>+</button>
          </div>
          <button className='button'>ADD TO CART</button>
        </div>
      </div>
    </div>
    <hr />
    <PeopleAlsoBought />
    </>
  );
};

export default ChocolateDetails;
