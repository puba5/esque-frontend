import React from "react";
import styled from "styled-components";
import MyProduct from "@src/components/molecules/product/MyProduct";
import MyHeader from "@src/components/organisms/Header/MyHeader";
import MyFooter from "@src/components/organisms/Footer/MyFooter";

export default function myPage() {
  return (
    <Wrapper>
      <MyHeader />
      <ProductControll></ProductControll>
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
  background: #f4f4f4;
`;