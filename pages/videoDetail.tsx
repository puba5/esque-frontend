import React from "react";
import styled from "styled-components";
import Product from "@src/components/molecules/Desc/product";

export default function VideoDetail() {
  return (
    <Wrapper>
      안녕하세요
      <div>달콤쌉쌀한 커피가 필요해</div>
      <div>
        비엔나에서 맛봤던 커피의 맛을 잊지 못해 늘 그리워하고 있었어요. 입술에 닿는 순간 초콜릿같이
        달
      </div>
      <Product />
      <Product />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  font-size: 1rem;
  width: 100%;
  height: 100%;
  background: #2b2b2b;
  opacity: 0.7;
  color: white;
`;
