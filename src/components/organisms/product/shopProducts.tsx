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
      <Photo></Photo>
      <ShopProduct></ShopProduct>
      <ShopProduct></ShopProduct>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 375px;
  height: 620px;
`;

const Desc = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: -0.02em;
  color: #2b2b2b;
`;
const Photo = styled.div`
  padding-left: auto;
  width: 343px;
  height: 415px;
  background: purple;
`;
