import React from "react";
import styled from "styled-components";

import VideoProduct from "@src/components/molecules/product/VideoProduct";
import IndexHeader from "@src/components/organisms/Header/IndexHeader";

export default function VideoFooterUp(props) {
  const { setIsFooterUp, videoRef } = props;

  const onClickFooter = () => {
    setIsFooterUp(false);
    videoRef.current.play();
  };

  return (
    <Wrapper>
      <IndexHeader />
      <Background />
      <Desc>
        <DescText onClick={onClickFooter}>
          <DescBig>달콤쌉살한 커피가 필요해</DescBig>
          <DescSmall>
            비엔나에서 맛봤던 커피의 맛을 잊지 못해 늘 그리워 하고 있었어요. 입술에 닿는 순간
            초콜릿같이 달콤한 비엔나 커피의 향이 느껴지지 않나요?
          </DescSmall>
        </DescText>
        <VideoProduct />
        <VideoProduct />
        <VideoProduct />
      </Desc>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const Background = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #2b2b2b;
  opacity: 0.9;
`;
const Desc = styled.div`
  position: fixed;
  bottom: 2.9rem;
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
