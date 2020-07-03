import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <EsqueTV>Esque TV999</EsqueTV>
      <Shop>SHOP</Shop>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 111px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  z-index: 10;
  padding-top: 50px;
  border: 1px solid black;
  background-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.5);
`;
const EsqueTV = styled.div`
  padding-left: 19px;
  padding-right: 30px;
  font-weight: bold;
`;

const Shop = styled.div``;
const Logo = styled.img`
  width: 5rem;
  height: auto;
`;
