import React, { useState } from "react";
import styled from "styled-components";

export default function ShopProduct(props) {
  const { brandName, productName, price } = props;
  const [isHeart, setIsHeart] = useState(false);

  const heartClick = () => {
    if (!isHeart) {
      setIsHeart(true);
    } else {
      setIsHeart(false);
    }
  };
  return (
    <Wrapper>
      <ProductPhoto></ProductPhoto>
      <ProductDesc>
        <Brand>Mestemacher</Brand>
        <ProductName>독일 천연 통곡물 호밀빵</ProductName>
        <Price>8,500</Price>
      </ProductDesc>
      <HeartButton onClick={heartClick}>
        {isHeart && <HeartFilled src="./image/filled_heart.png" />}
        {!isHeart && <HeartEmpty src="./image/empty_heart.png" />}
      </HeartButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 2px solid red;
  display: flex;
  width: 100%;
  padding: 2.2rem 1rem 0.5rem 2rem;
  color: black;
`;

const HeartFilled = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
const HeartEmpty = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const ProductPhoto = styled.div`
  width: 7.6rem;
  height: 7.6rem;
  background: #f4f4f4;
  margin-right: 1.2rem;
`;

const ProductDesc = styled.div`
  width: 21.3rem;
  height: 7.7rem;
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

const HeartButton = styled.div`
  width: 4rem;
  height: 5rem;
  border: 1px solid red;
  margin-left: auto;
  padding-left: 1.3rem;
  padding-top: 1.9rem;
`;
