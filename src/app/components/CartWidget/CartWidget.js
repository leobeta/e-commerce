import React from 'react';
import cart from './cart.png';

class CartWidget extends React.Component {
  render() {
    return (
      <a href='#'>
        <img src={cart} style={{ width: 32 }} />
      </a>
    );
  }
}

export default CartWidget;
