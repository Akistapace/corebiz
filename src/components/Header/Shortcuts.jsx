import React, { useContext, useState } from 'react';
import { ShortcutsContainer } from "./style";
import { BrowserView } from "react-device-detect";
import { Context } from '../../contexts/cartContext';

import {ReactComponent as UserIcon} from '../../assets/icons/user.svg';
import {ReactComponent as CartIcon} from '../../assets/icons/cart.svg';
import {Cover} from "./Cover";
import Cart from '../Cart';

export const Shortcuts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(Context);

  function handleOpenCart() {
    setIsOpen(!isOpen);
  }

  return (
    <ShortcutsContainer>
      <ul>
        <BrowserView >
          <li>
            <UserIcon />
            <a href="#">
              Minha Conta
            </a>
          </li>
        </BrowserView>

        <li onClick={handleOpenCart}>
          <CartIcon />
          <span>{cart.length > 0 ? cart.length : '0'}</span>
        </li>
      </ul>

      {isOpen &&
        <>
          <Cover props={{isOpen, setIsOpen}} />
          <Cart props={{isOpen, setIsOpen}} />
        </>
      }

    </ShortcutsContainer>
  )
}