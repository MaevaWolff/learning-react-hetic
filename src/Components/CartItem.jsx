import React, { useState } from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  width: 30em;
  padding: 2em 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: -5px 8px 20px 5px rgba(0, 0, 0, 0.116);
  border-radius: 8px;

  h2 {
    font-weight: bold;
  }
`;

const Button = styled.button`
  background-color: orange;
  border: none;
  margin-left: 0.5em;
`;

export default function CartItem(props) {
  const [quantity, setQuantity] = useState(1);
  const { product } = props;
  const { price, name } = product;

  return (
    <CartContainer>
      <h2>{name}</h2>
      <p>Price/u :{price}€</p>
      <p>Quantity: {quantity}</p>
      <p>Total price: {quantity * price}€</p>
      <div>
        <Button onClick={() => setQuantity(quantity - 1)}>-</Button>
        <Button onClick={() => setQuantity(quantity + 1)}> +</Button>
      </div>
    </CartContainer>
  );
}
