import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <EsqueTV>Esque TV 12 399</EsqueTV>
      <Shop>SHOP</Shop>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  z-index: 10;
`;
const EsqueTV = styled.div`
  padding-left: 19px;
  padding-right: 30px;
`;

const Shop = styled.div``;
const Logo = styled.img`
  width: 5rem;
  height: auto;
`;
