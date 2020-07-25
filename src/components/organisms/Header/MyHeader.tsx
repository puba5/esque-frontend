import React from "react";
import styled from "styled-components";
import BackButton from "@src/components/atoms/btn/BackButton";

export default function MyHeader() {
  const ClickBackButton = () => {
    console.log("BACK!!!");
    window.history.back();
  };
  return (
    <Wrapper>
      <HeaderContent>
        <BackButtonArea onClick={ClickBackButton}>
          <BackButton size={2.2} />
        </BackButtonArea>
        <MainTitle>
          MY
          <MyHeart src="./image/myHeart.png" />
        </MainTitle>
      </HeaderContent>
      <HeaderLine />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  height: 6.2rem;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  color: black;
`;
const MyHeart = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  margin-left: 0.6rem;
`;

const HeaderContent = styled.div`
  display: flex;
`;

const BackButtonArea = styled.a`
  padding-left: 1.8rem;
  padding-top: 1.143rem;
  margin-top: 0.6rem;
  width: 7.1rem;
  height: 4rem;
`;

const MainTitle = styled.p`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 3rem;
  text-align: center;
  letter-spacing: -0.02em;
  color: #2b2b2b;
  margin-top: 0rem;
  margin-left: 9rem;
`;

const Shop = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  padding-right: 14.8rem;
`;

const HeaderLine = styled.div`
  position: fixed;
  top: 6.2rem;
  height: 0.1rem;
  width: 100%;
  background: #e4e4e4;
`;
