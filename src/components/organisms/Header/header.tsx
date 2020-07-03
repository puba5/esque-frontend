import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <EsqueTV>Esque TV</EsqueTV>
      <Shop>SHOP</Shop>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 17.2rem;
  color: white;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding-top: 5rem;
  background: linear-gradient(
    179.81deg,
    rgba(2, 2, 2, 0.54) 0.35%,
    rgba(1, 1, 1, 0.30375) 64.48%,
    rgba(0, 0, 0, 0) 99.65%
  );
`;
const EsqueTV = styled.p`
  padding-left: 1.9rem;
  padding-right: 3rem;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 3rem;
`;

const Shop = styled.p`
  font-size: 2rem;
  line-height: 3rem;
`;
