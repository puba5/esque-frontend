import React from "react";
import styled from "styled-components";
import ShopHeader from "@src/components/organisms/Header/shopHeader";
import ShopProducts from "@src/components/organisms/product/shopProducts";

export default function Shop() {
  return (
    <Wrapper>
      <ShopHeader></ShopHeader>
      <Line />
      <Dummy></Dummy>
      <ShopProducts></ShopProducts>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Dummy = styled.div`
  height: 11.2rem;
`;
const Line = styled.div`
  position: fixed;
  top: 11.2rem;
  height: 0.1rem;
  width: 100%;
  background: #e4e4e4;
`;
