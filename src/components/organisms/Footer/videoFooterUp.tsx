import React from "react";
import styled from "styled-components";

import Product from "@src/components/molecules/Desc/product";

export default function VideoFooterUp(props) {
  const { setIsFooterUp } = props;

  return (
    <Wrapper>
      <Background />
      <Desc>
        <DescText
          onClick={() => {
            setIsFooterUp(false);
          }}
        >
          <DescBig>달콤쌉살한 커피가 필요해</DescBig>
          <DescSmall>
            비엔나에서 맛봤던 커피의 맛을 잊지 못해 늘 그리워 하고 있었어요. 입술에 닿는 순간
            초콜릿같이 달콤한 비엔나 커피의 향이 느껴지지 않나요?
          </DescSmall>
        </DescText>
        <Product />
        <Product />
      </Desc>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const Background = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 31.8rem;
  transform: rotate(180deg);
  bottom: 0;
  background: linear-gradient(
    179.66deg,
    rgba(2, 2, 2, 0.54) 0.35%,
    rgba(1, 1, 1, 0.30375) 72.24%,
    rgba(0, 0, 0, 0) 99.65%
  );
`;
const Desc = styled.div`
  position: fixed;
  bottom: 3.2rem;
`;
const DescText = styled.div`
  padding-left: 2rem;
  width: 28rem;
`;
const DescBig = styled.p`
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

const DescSmall = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2.1rem;
  letter-spacing: -0.02em;
  color: #ffffff;
`;