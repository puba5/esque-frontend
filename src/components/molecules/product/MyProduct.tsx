import React from "react";
import styled from "styled-components";

export default function MyProduct() {
  return (
    <Wrapper>
      <ButtonList>
        <CheckButton></CheckButton>
        <ButtonDesc>상품선택</ButtonDesc>
        <CloseButton></CloseButton>
      </ButtonList>
      <ProductContainer>
        <ProductPhoto />
        <ProductDesc>
          <Brand>Mestemacher</Brand>
          <ProductName>독일 천연 통곡물 호밀빵</ProductName>
          <Price>8,500</Price>
        </ProductDesc>
        <Quantity></Quantity>
      </ProductContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: solid 2px blue;
  width: 100%;
  height: 14.4rem;
  color: black;
`;
const ButtonList = styled.div`
  display: flex;
`;
const CheckButton = styled.a`
  margin-left: 1.6rem;
  margin-top: 1.3rem;
  width: 2.4rem;
  height: 2.4rem;
  background: red;
`;
const ButtonDesc = styled.p`
  margin-left: 0.2rem;
  margin-top: 1.5rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 1.9rem;
  letter-spacing: -0.02em;
`;

const CloseButton = styled.div`
  margin-left: auto;
  margin-right: 1rem;
  margin-top: 1rem;
  width: 3rem;
  height: 3rem;
  background-color: red;
`;

const ProductContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-left: 2rem;
`;

const ProductPhoto = styled.div`
  width: 7.6rem;
  height: 7.6rem;
  background: #f4f4f4;
  margin-right: 1.3rem;
`;

const ProductDesc = styled.div`
  width: 21.3rem;
  height: 7.6rem;
`;

const Brand = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 1.9rem;
  letter-spacing: -0.02em;
`;
const ProductName = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 1.7rem;
  line-height: 2.7rem;
  letter-spacing: -0.02em;
`;
const Price = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -0.02em;
`;

const Quantity = styled.div`
  width: 5.3rem;
  height: 2.4rem;
  margin-right: 2rem;
  margin-left: auto;
  margin-top: auto;
  border: black 1px solid;
`;
