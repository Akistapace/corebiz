import React, { useState, useEffect, useContext } from 'react';
import FormatMoney from '../../utils/FormatNumber';
import {Context} from '../../contexts/cartContext';

import { CartEmpty, CartList, CartContainer,  CartHeader, CartValues, CartTitle, CartClose } from './style';
import { CartItem } from '../CartItem';

const Cart = ({props}) => {
  const { cart } = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleCloseCart() {
    props.setIsOpen(!props.isOpen);
  }

  function addingPrice() {
    setTotalPrice(cart.reduce((acc, ele) => {
      ele.listPrice ? acc += ele.listPrice : acc += ele.price;
      return acc;
    }, 0));
  }


  useEffect(() => {
    addingPrice();
  }, [cart]);

  return (
    <>
      {props.isOpen &&
        (
          <CartContainer>
            <CartHeader>
              <CartTitle>Carrinho ({cart.length})</CartTitle>
              <CartClose onClick={handleCloseCart}>x</CartClose>
            </CartHeader>
            <CartList>
              {
                cart.length > 0 ?
                (
                  cart.map(product => (

                    <CartItem key={product.productId} product={product} />

                  ))
                )
                :
                (
                  <CartEmpty>
                    <p>Seu carrinho está vazio</p>
                  </CartEmpty>
                )
              }
            </CartList>
            <CartValues>
              <span>Total</span>
              <span>{FormatMoney(totalPrice)}</span>
            </CartValues>
          </CartContainer>
        )
      }
    </>
  );
};

export default Cart;