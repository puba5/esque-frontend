import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import ProuductHeartButton from "@src/components/molecules/Button/ProuductHeartButton";

export default function VideoProduct(props) {
  const { productData } = props;
  const [brandFullName, setBrandFullName] = useState(null);

  const getBrandName = (brandName) =>
    axios
      .get(`https://esque.store/commerce/brands/${brandName}/get-name/`, {
        params: {},
      })
      .then((response) => {
        setBrandFullName(response.data);
      })
      .catch((error) => console.log(error));

  useEffect(() => {
    getBrandName(productData.brand);
  }, []);

  // 숫자에 comma 추가
  const addComma = (moneyNumber) => {
    if (moneyNumber === 0) return "0";

    let moneyString = "";
    let cnt = 0;
    while (moneyNumber >= 1) {
      if (cnt !== 0 && cnt % 3 === 0) {
        moneyString = "," + moneyString;
      }
      moneyString = (moneyNumber % 10) + moneyString;
      moneyNumber = Math.floor(moneyNumber / 10);
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
        <Price>
          <PlusMinus>±</PlusMinus>
          {addComma(productData.price)}
        </Price>
      </ProductDesc>
      <ProuductHeartButton productID={productData.id} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 2.2rem 1rem 0.5rem 2rem;
  color: white;
`;

const PlusMinus = styled.div`
  margin-top: auto;
  margin-right: 0.7rem;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2.1rem;
  letter-spacing: -0.02em;
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
  display: flex;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -0.02em;
`;

const HeartButton = styled.div`
  width: 4rem;
  height: 5rem;
  margin-left: auto;
  padding-left: 1.3rem;
  padding-top: 1.9rem;
`;
