import React from "react";
import styled from "styled-components";

export default function AskHeader() {
  return (
    <Wrapper>
      <Shop>1:1문의</Shop>
      <HeaderLine />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 2px solid blue;
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  height: 6.2rem;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  padding-top: 1rem;
  color: black;
`;

const Shop = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  padding-right: 14.8rem;
`;

const HeaderLine = styled.div`
  position: fixed;
  top: 6.2rem;
  height: 0.1rem;
  width: 100%;
  background: #e4e4e4;
`;
