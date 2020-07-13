import React from "react";
import styled from "styled-components";

export default function ShopFooter() {
  return (
    <Wrapper>
      <AboutEsque />
      <BottomBox>
        <BrandDesc>
          <DescIndex>
            <DescText>브랜드</DescText>
            <DescText>대표</DescText>
            <DescText>문의</DescText>
          </DescIndex>
          <DescContent>
            <DescText>Esque</DescText>
            <DescText>최준혁</DescText>
            <DescText>lud2ns@gmail.com</DescText>
          </DescContent>
        </BrandDesc>
        <UnderBar></UnderBar>
        <CopyRight>copyright(C) -esque all rights reserved.</CopyRight>
      </BottomBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 1.9rem;
  letter-spacing: -0.02em;
  color: #8c8c8c;
`;

const AboutEsque = styled.div`
  width: 100%;
  height: 11.5rem;
  background: blue;
`;
const BottomBox = styled.div`
  width: 100%;
  height: 34.7rem;
  background: #2b2b2b;
  box-shadow: 0px 15px 60px rgba(0, 0, 0, 0.1);
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 3rem;
`;

const BrandDesc = styled.div`
  display: flex;
`;

const DescIndex = styled.div``;
const DescContent = styled.div`
  margin-left: 1.6rem;
`;
const DescText = styled.p``;

const UnderBar = styled.div`
  margin-top: 1.6rem;
  width: 33.4rem;
  height: 0.2rem;
  border: 0.1rem solid #8c8c8c;
`;

const CopyRight = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 132%;
  /* or 13px */
  letter-spacing: -0.02em;
  margin-top: 3.1rem;
`;
