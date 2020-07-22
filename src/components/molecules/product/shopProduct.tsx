import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "axios";

export default function ShopProduct(props) {
  const { brandName, productName, price, productImage } = props;
  const [isHeart, setIsHeart] = useState(false);

  const [brandFullName, setBrandFullName] = useState(null);

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

  useEffect(() => {
    // 브랜드 id로 브랜드 이름을 가져옴
    axios
      .get(`https://esque.store/commerce/brands/${brandName}/get-name/`, {
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

  const heartClick = () => {
    // 좋아요 상품 목록들을 불러온다.
    // 세션 스토리지를 이용
    let myProduct = JSON.parse(sessionStorage.getItem("myProduct"));
    if (!myProduct) {
      myProduct = [];
    }

    if (!isHeart) {
      // 하트 버튼을 누르면 저장
      setIsHeart(true);
      // 만약 이미 좋아요 누른 상품이라면 실행 myProduct에 담지 않는다.
      if (myProduct.includes(productName)) {
        return;
      }
      sessionStorage.setItem("myProduct", JSON.stringify([...myProduct, productName]));
    } else {
      setIsHeart(false);
      // 좋아요 취소를 하면 상품을 찾아서 리스트에서 삭제
      const productIndex = myProduct.indexOf(productName);
      if (productIndex > -1) {
        myProduct.splice(productIndex, 1);
      }
      sessionStorage.setItem("myProduct", JSON.stringify([...myProduct]));
    }
    console.log(myProduct);
  };

  return (
    <Wrapper>
      <ProductPhoto src={productImage} />
      <ProductDesc>
        <Brand>{brandFullName}</Brand>
        <ProductName>{productName}</ProductName>
        <Price>{addComma(price)}</Price>
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
