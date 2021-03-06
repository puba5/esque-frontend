import React from "react";
import styled from "styled-components";
import Hamberger from "@src/components/atoms/btn/hamberger";

export default function ShopHeader(props) {
  const { isMenu, setIsMenu } = props;
  const onClickButton = () => {
    if (isMenu == false) {
      console.log("hello");
      setIsMenu(true);
    }
  };

  return (
    <div>
      <Wrapper>
        <EsqueTV href="/">Esque TV</EsqueTV>
        <Shop>SHOP</Shop>
        <HambergerButton onClick={onClickButton}>
          <Hamberger size={1} color={"black"} />
        </HambergerButton>
        <HeaderLine />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  height: 6.2rem;
  display: flex;
  background: #ffffff;
  padding-top: 1rem;
  color: black;
`;
const EsqueTV = styled.a`
  &:active {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
  &:hover {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
  margin-left: 1.9rem;
  margin-right: 3rem;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  color: #8c8c8c;
  opacity: 0.6;
`;

const Shop = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  margin-right: auto;
`;

const HeaderLine = styled.div`
  position: fixed;
  top: 6.2rem;
  height: 0.1rem;
  width: 100%;
  background: #e4e4e4;
`;

const HambergerButton = styled.div`
  padding-right: 1.2rem;
`;
