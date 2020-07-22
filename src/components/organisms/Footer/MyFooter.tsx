import React, { useEffect } from "react";
import styled from "styled-components";

export default function MyFooter(props) {
  const { selectedProductList } = props;
  // 맛보고 싶어요 버튼
  const onClickTasteButton = () => {};
  return (
    <Wrapper>
      <HeaderLine />
      <FooterContent>
        <PriceInfo>
          <TotalText>Total</TotalText>
          <TotalPrice>8,500 원</TotalPrice>
        </PriceInfo>
        <TasteButton>
          <a>맛보고 싶어요</a>
        </TasteButton>
      </FooterContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  height: 7rem;
`;
const HeaderLine = styled.div`
  height: 0.1rem;
  width: 100%;
  background: #e4e4e4;
`;

const FooterContent = styled.div`
  padding-top: 1.1rem;
  padding-left: 2rem;
  display: flex;
`;
const PriceInfo = styled.div`
  margin-right: 3.5rem;
  width: 13.8rem;
`;

const TotalText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2.1rem;
  letter-spacing: -0.02em;
  margin-bottom: 0;
  color: #8c8c8c;
`;
const TotalPrice = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 2.5rem;
  letter-spacing: -0.02em;
  color: #2b2b2b;
`;
const TasteButton = styled.button`
  width: 16.2rem;
  height: 5rem;
  border: none;
  background: #2b2b2b;
  border-radius: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 1.7rem;
  line-height: 2.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: -0.02em;
  color: #fcfcfc;
  font-style: normal;
`;
