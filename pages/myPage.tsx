import React from "react";
import styled from "styled-components";
import MyProduct from "@src/components/molecules/product/myProduct";

export default function myPage() {
  return (
    <Wrapper>
      <MyProduct></MyProduct>
      <MyProduct></MyProduct>
      <MyProduct></MyProduct>
      <div>??</div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
