import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function ShopFooter() {
  const peopleInformation = [
    { name: "최준혁", position: "대표", email: "lud2ns@gmail.com" },
    { name: "백승연", position: "CTO", email: "chris8w8@naver.com" },
  ];
  const [peopleNumber, setPeopleNumber] = useState(0);

  const changePeople = () => {
    if (peopleNumber == 0) {
      setPeopleNumber(1);
    } else {
      setPeopleNumber(0);
    }
  };
  return (
    <Wrapper>
      <AboutEsque src="./image/guide_banner.png" />
      <BottomBox>
        <BrandDesc>
          <DescIndex>
            <DescText>브랜드</DescText>
            <DescText>{peopleInformation[peopleNumber].position}</DescText>
            <DescText>문의</DescText>
          </DescIndex>
          <DescContent onClick={changePeople}>
            <DescText>Esque</DescText>
            <DescText>{peopleInformation[peopleNumber].name}</DescText>
            <DescText>{peopleInformation[peopleNumber].email}</DescText>
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

const AboutEsque = styled.img`
  width: 100%;
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
  font-size: 1rem;
  line-height: 132%;

  letter-spacing: -0.02em;
  margin-top: 3.1rem;
`;
