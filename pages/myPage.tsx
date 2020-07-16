import React from "react";
import styled from "styled-components";
import MyProduct from "@src/components/molecules/product/MyProduct";
import MyHeader from "@src/components/organisms/Header/MyHeader";
import MyFooter from "@src/components/organisms/Footer/MyFooter";

export default function myPage() {
  return (
    <Wrapper>
      <MyHeader />
      <ProductControll>
        <ControllButton>
          <SelectText>전체선택(2/3)</SelectText>
          <DeleteButton>삭제</DeleteButton>
        </ControllButton>
      </ProductControll>
      <MyProduct></MyProduct>
      <MyProduct></MyProduct>
      <MyProduct></MyProduct>
      <MyFooter></MyFooter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f4f4f4;
  height: 100%;
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
