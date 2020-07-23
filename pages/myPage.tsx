import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyProduct from "@src/components/molecules/product/MyProduct";
import MyHeader from "@src/components/organisms/Header/MyHeader";
import MyFooter from "@src/components/organisms/Footer/MyFooter";

import axios from "axios";

export default function myPage() {
  const [productList, setProductList] = useState([]);
  const [myProduct, setMyProduct] = useState([]);
  const [selectedProductList, setSelectedProductList] = useState([]);

  useEffect(() => {
    // 세션 스토리지에서 좋아요 눌렀던 데이터를 가져옴
    let myProductList = JSON.parse(sessionStorage.getItem("myProduct"));
    if (!myProductList) {
      setMyProduct([]);
    } else {
      setMyProduct(JSON.parse(sessionStorage.getItem("myProduct")));
    }

    // 상품 정보 데이터를 가져옴
    axios
      .get("https://esque.store/commerce/products/", {
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

  const onClickDeleteProduct = () => {
    // 지우기 추가
    // 지워진 이후 저장될 좋아요 상품 리스트
    let myProductList = [...myProduct];

    selectedProductList.map((selectedProduct) => {
      // 만약 선택된 제품이 없다면 skip
      if (!myProduct.includes(selectedProduct)) {
        return;
      }
      // 좋아요 누른 상품을 목록에서 삭제
      const productIndex = myProductList.indexOf(selectedProduct);
      if (productIndex > -1) {
        myProductList.splice(productIndex, 1);
      }
    });
    sessionStorage.setItem("myProduct", JSON.stringify([...myProduct]));
    setMyProduct(myProductList);
    setSelectedProductList([]);
  };

  return (
    <Wrapper>
      <MyHeader />
      <ProductControll>
        <ControllButton>
          <SelectText>{`전체선택(${selectedProductList.length}/${myProduct.length})`}</SelectText>
          <DeleteButton onClick={onClickDeleteProduct}>삭제</DeleteButton>
        </ControllButton>
      </ProductControll>
      {productList.map((product, i) => {
        if (!myProduct) {
          return;
        }
        if (myProduct.includes(product.id)) {
          return (
            <MyProduct
              selectedProductList={selectedProductList}
              setSelectedProductList={setSelectedProductList}
              setMyProduct={setMyProduct}
              brandName={product.brand}
              productName={product.name}
              price={product.price}
              productImage={product.main_image}
              productID={product.id}
            />
          );
        }
      })}
      <MyFooter selectedProductList={selectedProductList} />
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
