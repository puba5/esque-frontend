import React from "react";
import styled from "styled-components";
import ShopProduct from "@src/components/molecules/Desc/shopProduct";

export default function ShopProducts() {
  return (
    <Wrapper>
      <Desc>
        담백한 독일식 <br />
        브런치는 어떠세요?
      </Desc>
      <Photo />
      <ShopProduct />
      <ShopProduct />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 37.5rem;
  height: 62rem;
`;

const Desc = styled.div`
  position: fixed;
  font-style: normal;
  font-weight: 300;
  font-size: 3rem;
  line-height: 4rem;
  letter-spacing: -0.02em;
  color: #2b2b2b;
`;

const Photo = styled.div`
  padding-left: auto;
  width: 34.3rem;
  height: 41.5rem;
  background: purple;
`;
