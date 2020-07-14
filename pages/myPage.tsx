import React from "react";
import styled from "styled-components";
import MyProduct from "@src/components/molecules/product/myProduct";
import MyHeader from "@src/components/organisms/Header/MyHeader";

export default function myPage() {
  return (
    <Wrapper>
      <MyHeader></MyHeader>
      <MyProduct></MyProduct>
      <MyProduct></MyProduct>
      <MyProduct></MyProduct>
      <div>??</div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
