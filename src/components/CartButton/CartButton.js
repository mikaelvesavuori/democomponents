import React from "react";
import PropTypes from "prop-types";

import CartSymbol from "elements/Cartsymbol/Cartsymbol";

import { CartButtonStyle, CartButtonCountStyle } from "./CartButtonCss";

const CartButton = ({ itemCount = 0 }) => (
  <div style={CartButtonStyle}>
    <a href="/checkout">
      <div style={CartButtonCountStyle}>{itemCount}</div>
      <CartSymbol />
    </a>
  </div>
);

CartButton.propTypes = {
  itemCount: PropTypes.number,
};

export default CartButton;