import React, { useContext } from 'react';
import FormatMoney from '../../utils/FormatNumber';
import { Context } from '../../contexts/cartContext';

import { Product, ProductImage, ProductInfo,ProductFlag, ProductValues, ProductBody , ProductButton, ProductPrice, ProductInstallments ,ProductListPrice , ProductTitle } from "./style";
import { RatingStars } from "./RatingStar";
import flag from "../../assets/images/flag.png";

export const ProductCard = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useContext(Context);

  return (
    <Product data-id={product.productId} key={product.productId}>
      <ProductImage>
        {product.imageUrl ? (
          <img height={300} width={300} src={product.imageUrl} alt={product.productName} />
        ):(
          <img src="https://via.placeholder.com/300x" alt="produto" />
        )}
        {  product.listPrice  && <ProductFlag><img src={flag} alt="produto" /></ProductFlag>}

      </ProductImage>

      <ProductBody>
        <ProductInfo>
          {product.productName && <ProductTitle>{product.productName}</ProductTitle>}
          {product.stars && <RatingStars rating={product.stars}>{product.stars}</RatingStars>}
        </ProductInfo>
        <ProductValues>
          {/* Monta o preço do Product de produto */
            product.listPrice  ?
            (
              <>
                <ProductPrice discount>de { FormatMoney(product.price) }</ProductPrice>
                <ProductListPrice>por { FormatMoney(product.listPrice) }</ProductListPrice>
              </>
            )
            :
            (<ProductPrice>por { FormatMoney(product.price)}</ProductPrice>)
          }

          {/* Monta as parcelas */
            product.installments.map(installment => (
              <ProductInstallments key={installment.quantity}>
                {installment.quantity}x de { FormatMoney(installment.value)}
              </ProductInstallments>
            ))
          }
        </ProductValues>
        {
          cart && cart.length > 0 && cart.find(item => item.productId === product.productId) ?
          (
            <ProductButton onClick={() => removeFromCart(product)}>Remover</ProductButton>
          )
          :
          (
            <ProductButton onClick={() => addToCart(product)}>Adicionar</ProductButton>
          )
        }
      </ProductBody>
    </Product>
  );
}