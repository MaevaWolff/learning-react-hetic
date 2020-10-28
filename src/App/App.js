import React from "react";
import CartItem from "../Components/CartItem";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  const productData = {
    name: "nathan",
    price: 2,
  };

  return (
    <Container>
      <CartItem product={productData} />
    </Container>
  );
}
