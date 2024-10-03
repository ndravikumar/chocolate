import React from 'react';
import { NavLink } from 'react-router-dom';
import Chocolate from '../../download.jpg';
import './cart.css';

function Cart({ cart }) {
  console.log(cart, 'cart');
  return (
    <div className='shopping-cart'>
      <div className='cart-header'>
        <h2>Your Cart</h2>
        <nav aria-label='breadcrumb'>
          <ul className='breadcrumb-nav'>
            <li className='breadcrumb-item'>
              <NavLink to='/' exact activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              / Your Shopping Cart
            </li>
          </ul>
        </nav>
      </div>
      <div className='cart-container'>
        <div className='cart-table'>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                return (
                  <tr>
                    <td className='product'>
                      <div className='product-info__container'>
                        <img src={Chocolate} alt='Product' />
                        <div className='product-info'>
                          <p>{item.chocolateName}</p>
                          <p>₹{item.pricePerUnit}</p>
                        </div>
                      </div>
                    </td>
                    <td className='quantity'>
                      <div className='chocolate-button_container'>
                        <div className='chocolate-card_container'>
                          <button
                            className='chocolate-card__remove'
                            // disabled={quantity === count}
                            // onClick={handleMinus}
                          >
                            -
                          </button>
                          <p className='chocolate-card__quantity'>
                            {item.count}
                          </p>
                          <button className='chocolate-card__add'>+</button>
                        </div>
                      </div>
                    </td>
                    <td className='total'>₹{item.price}</td>
                    <td className='order-note'></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='cart-footer'>
          <div>Add Order Note</div>
          <div className='order-note'>
            <textarea placeholder='Add order note'></textarea>

            <div className='cart-summary'>
              <div className='cart-summary__title'>
                <p>Subtotal</p>
                <p>₹5,499.00</p>
              </div>
              <p className='cart-summary__note'>
                Taxes and shipping calculated at checkout
              </p>
              <button className='checkout-button'>CHECK OUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
