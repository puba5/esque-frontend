import React from "react";
import styled from "styled-components";

export default function ShopFooter() {
  return (
    <Wrapper>
      <AboutEsque />
      <BrandDesc />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const AboutEsque = styled.div`
  width: 100%;
  height: 11.5rem;
  background: blue;
`;
const BrandDesc = styled.div`
  width: 100%;
  height: 34.7rem;
  background: #2b2b2b;
  box-shadow: 0px 15px 60px rgba(0, 0, 0, 0.1);
`;
