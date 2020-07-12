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
    <Wrapper>
      <EsqueTV href="/">Esque TV</EsqueTV>
      <Shop>SHOP</Shop>
      <div onClick={onClickButton}>
        <Hamberger size={1} color={"black"} />
      </div>
      <Line />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 6.2rem;
  display: flex;
  flex-direction: row;
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
  padding-left: 1.9rem;
  padding-right: 3rem;
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
  padding-right: 14.8rem;
`;

const Line = styled.div`
  position: fixed;
  top: 6.2rem;
  height: 0.1rem;
  width: 100%;
  background: #e4e4e4;
`;
