import React, { useContext } from 'react';
import FormatMoney from '../../utils/FormatNumber';
import { Context } from '../../contexts/cartContext';

import { CartCard, CartName, CartRemove, CartListPrice, CartPrice, CartBody, CartImage } from './style';

export const CartItem = ({ product }) => {
  const { cart, setCart } = useContext(Context);

  function removeFromCart() {
    setCart(cart.filter(cartItem => cartItem.productId !== product.productId));
  }

  return (
    <CartCard key={`cart-${product.productId}`}>
      <CartImage>
        {product.imageUrl ? (
          <img height={300} width={300} src={product.imageUrl} alt={product.productName} />
        ):(
          <img src="https://via.placeholder.com/300x" alt="produto" />
        )}
      </CartImage>

      <CartBody>
        {product.productName && <CartName>{product.productName}</CartName>}

        {
          product.listPrice  ?
          (
            <>
              <CartPrice discount>de { FormatMoney(product.price) }</CartPrice>
              <CartListPrice>por { FormatMoney(product.listPrice) }</CartListPrice>
            </>
          )
          :
          (<CartPrice>por {FormatMoney(product.price)}</CartPrice>)
        }
        <CartRemove onClick={removeFromCart}>
          &#10005;
        </CartRemove>
      </CartBody>
    </CartCard>
  );
}