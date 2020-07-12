import React from "react";
import styled from "styled-components";
import Hamberger from "@src/components/atoms/btn/hamberger";

export default function ShopHeader() {
  return (
    <Wrapper>
      <EsqueTV>Esque TV</EsqueTV>
      <Shop>SHOP</Shop>
      <Hamberger size={1} color={"black"}></Hamberger>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 11.1rem;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  padding-top: 5rem;
  color: black;
`;
const EsqueTV = styled.p`
  padding-left: 1.9rem;
  padding-right: 3rem;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  color: #8c8c8c;
  opacity: 0.6;
`;

const Shop = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  padding-right: 14.8rem;
`;
