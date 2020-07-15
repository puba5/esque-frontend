import React from "react";
import styled from "styled-components";
import BackButton from "@src/components/atoms/btn/BackButton";

export default function AskHeader() {
  const ClickBackButton = () => {
    console.log("BACK!!!");
    window.history.back();
  };
  return (
    <Wrapper>
      <HeaderContent>
        <BackButtonArea onClick={ClickBackButton}>
          <BackButton size={2} />
        </BackButtonArea>
        <MainTitle>1:1문의</MainTitle>
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
  margin-top: 1.2rem;
  margin-left: 9rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.7rem;
  line-height: 2.5rem;
  text-align: center;
  letter-spacing: -0.02em;
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
