import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import MyProduct from "@src/components/molecules/product/MyProduct";
import MyHeader from "@src/components/organisms/Header/MyHeader";
import MyFooter from "@src/components/organisms/Footer/MyFooter";
import EmailModal from "@src/components/organisms/Modal/EmailModal";

import axios from "axios";

export default function myPage() {
  const [productList, setProductList] = useState([]);
  const [myProduct, setMyProduct] = useState([]);
  const [selectedProductList, setSelectedProductList] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [isALLChecked, setIsALLChecked] = useState(false);

  const ModalRef = useRef(null);

  // 세션 스토리지에서 좋아요 눌렀던 데이터를 가져옴
  const initalizeMyProduct = () => {
    let myProductList = JSON.parse(sessionStorage.getItem("myProduct"));
    if (!myProductList) {
      setMyProduct([]);
    } else {
      setMyProduct(JSON.parse(sessionStorage.getItem("myProduct")));
    }
  };

  const getProductData = () =>
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
      });

  useEffect(() => {
    initalizeMyProduct();
    getProductData();
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

  // 체크 버튼을 누르면 작동
  const onClickCheckedButton = () => {
    if (isALLChecked) {
      // 체크가 되있는 상태라면
      setIsALLChecked(!isALLChecked);
      setSelectedProductList([]);
    } else {
      // 체크가 안되어 있는 상태라면
      setIsALLChecked(!isALLChecked);
      setSelectedProductList([...myProduct]);
    }
  };
  return (
    <Wrapper>
      {isModal && <BlackBackground />}
      <MyHeader />
      <ProductControll>
        <ControllButton>
          <CheckButtonArea onClick={onClickCheckedButton}>
            {!isALLChecked && <CheckButton src="./image/check_deactivated.png" />}
            {isALLChecked && <CheckButtonActivated src="./image/check_activated.png" />}
          </CheckButtonArea>
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
              isALLChecked={isALLChecked}
              setIsALLChecked={setIsALLChecked}
            />
          );
        }
      })}
      <MyFooter
        selectedProductList={selectedProductList}
        ModalRef={ModalRef}
        setIsModal={setIsModal}
      />
      <EmailModal
        selectedProductList={selectedProductList}
        ModalRef={ModalRef}
        setIsModal={setIsModal}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f4f4f4;
  height: 100%;
  padding-bottom: 7rem;
`;

const BlackBackground = styled.div`
  z-index: 200;
  position: fixed;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
`;

const ProductControll = styled.div`
  width: 100%;
  height: 10.8rem;
  padding-top: 6.8rem;
  background: #f4f4f4;
`;

const CheckButtonArea = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.3rem;
  margin-top: 1.3rem;
  width: 2.4rem;
  height: 2.4rem;
`;
const CheckButton = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

const CheckButtonActivated = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

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
