import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <Background />
      <Desc>
        <DescBig>
          일상 속에서 경험하는
          <br />
          유럽 푸드 라이프
        </DescBig>
        <DescSmall>영상으로 현지의 분위기를 생생하게 느껴보세요</DescSmall>
      </Desc>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const Desc = styled.div`
  position: fixed;
  bottom: 7.7rem;
  left: 2rem;
`;
const DescBig = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  line-height: 4rem;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

const DescSmall = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #ffffff;
  opacity: 0.6;
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
