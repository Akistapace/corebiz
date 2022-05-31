import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const ContextGlobal = ({ children }) => {
  const [ cart, setCart ] = useState([]);

  useEffect(() => {
    const cartItemsData = JSON.parse(localStorage.getItem('cartItems'))

    if (cartItemsData && cartItemsData.length > 0) {
        setCart(cartItemsData)
        console.log(cartItemsData);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart))
  }, [cart])

  function addToCart(newItem) {
    setCart(prevItems => [...prevItems, newItem])
  }

  function removeFromCart(prod) {
    setCart(prevItems => prevItems.filter(item => item.productId !== prod.productId))
  }

  return (
    <Context.Provider value={{ setCart, addToCart, removeFromCart, cart } }>
      {children}
    </Context.Provider>
  )
};

export default ContextGlobal;