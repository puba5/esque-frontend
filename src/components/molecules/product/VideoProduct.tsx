import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function VideoProduct(props) {
  const { productData } = props;
  const [isHeart, setIsHeart] = useState(false);
  const [brandFullName, setBrandFullName] = useState(null);

  const heartClick = () => {
    if (!isHeart) {
      setIsHeart(true);
    } else {
      setIsHeart(false);
    }
  };

  useEffect(() => {
    // 브랜드 id로 브랜드 이름을 가져옴
    axios
      .get(`https://esque.store/commerce/brands/${productData.brand}/get-name/`, {
        params: {},
      })
      .then(function (response) {
        console.log(response);
        setBrandFullName(response.data);
      })
      .catch(function (error) {})
      .finally(function () {
        // always executed
      });
  }, []);

  // 숫자에 comma 추가
  const addComma = (moneyNumber) => {
    if (moneyNumber === 0) {
      return "0";
    }
    let moneyString = "";
    let cnt = 0;
    while (moneyNumber !== 0) {
      if (cnt !== 0 && cnt % 3 === 0) {
        moneyString = "," + moneyString;
      }
      moneyString = (moneyNumber % 10) + moneyString;
      moneyNumber = Math.round(moneyNumber / 10);
      cnt++;
    }
    return moneyString;
  };
  return (
    <Wrapper>
      <ProductPhoto src={productData.main_image} />
      <ProductDesc>
        <Brand>{brandFullName}</Brand>
        <ProductName>{productData.name}</ProductName>
        <Price>{addComma(productData.price)}</Price>
      </ProductDesc>
      <HeartButton onClick={heartClick}>
        {isHeart && <HeartFilled src="./image/filled_heart_white.png" />}
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
  color: white;
`;

const HeartFilled = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
const HeartEmpty = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const ProductPhoto = styled.img`
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
