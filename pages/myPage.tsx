import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyProduct from "@src/components/molecules/product/MyProduct";
import MyHeader from "@src/components/organisms/Header/MyHeader";
import MyFooter from "@src/components/organisms/Footer/MyFooter";

import axios from "axios";

export default function myPage() {
  const [productList, setProductList] = useState([]);
  const [myProduct, setMyProduct] = useState([]);
  // const [selectedProductList, setSelectedProductList] = useState([]);

  useEffect(() => {
    // 세션 스토리지에서 좋아요 눌렀던 데이터를 가져옴
    setMyProduct(JSON.parse(sessionStorage.getItem("myProduct")));

    // 상품 정보 데이터를 가져옴
    axios
      .get("https://www.esque.store/commerce/products/", {
        params: {},
      })
      .then(function (response) {
        setProductList(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const AddProduct = () => {
    axios
      .post("https://www.esque.store/commerce/purchases/", {
        count: 3,
        product: 3,
        customer: 1,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed아
      });
  };

  return (
    <Wrapper>
      <MyHeader />
      <ProductControll>
        <ControllButton>
          <SelectText>전체선택(2/3)</SelectText>
          <DeleteButton>삭제</DeleteButton>
        </ControllButton>
      </ProductControll>
      {productList.map((product, i) => {
        if (!myProduct) {
          return;
        }
        if (myProduct.includes(product.name)) {
          return (
            <MyProduct
              brandName={product.brand}
              productName={product.name}
              price={product.price}
              productImage={product.main_image}
            />
          );
        }
      })}
      <MyFooter></MyFooter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f4f4f4;
  height: 100%;
  padding-bottom: 7rem;
`;

const ProductControll = styled.div`
  width: 100%;
  height: 10.8rem;
  padding-top: 6.8rem;
  background: #f4f4f4;
`;
const SelectButton = styled.div``;
const SelectText = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2.1rem;
  letter-spacing: -0.02em;
  color: #2b2b2b;
`;
const ControllButton = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid red;
  margin: 0 auto;
  height: 3.6rem;
  width: 34.8rem;
`;

const DeleteButton = styled.button`
  margin-left: auto;
  border: none;
  width: 6.1rem;
  height: 2.6rem;
  background: #ffffff;
  border-radius: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2.1rem;
  text-align: center;
  letter-spacing: -0.02em;
  color: #2b2b2b;
`;
