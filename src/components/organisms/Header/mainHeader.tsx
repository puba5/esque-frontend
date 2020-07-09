import React from "react";
import styled from "styled-components";
import Hamberger from "@src/components/atoms/Btn/hamberger";

export default function MainHeader(props) {
  const { isMenu, setIsMenu } = props;
  const onClickButton = () => {
    console.log(isMenu);
    if (isMenu == 1) {
      setIsMenu(0);
    }
  };
  return (
    <Wrapper>
      <EsqueTV>Esque TV</EsqueTV>
      <Shop>SHOP</Shop>
      <div onClick={onClickButton}>
        <Hamberger size={1} color={"white"}></Hamberger>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 17.2rem;
  color: white;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding-top: 5rem;
  background: linear-gradient(
    179.81deg,
    rgba(2, 2, 2, 0.54) 0.35%,
    rgba(1, 1, 1, 0.30375) 64.48%,
    rgba(0, 0, 0, 0) 99.65%
  );
`;
const EsqueTV = styled.p`
  padding-left: 1.9rem;
  padding-right: 3rem;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
`;

const Shop = styled.p`
  font-size: 2rem;
  line-height: 3rem;
  font-style: normal;
  font-weight: normal;
  color: #ffffff;
  opacity: 0.6;
  letter-spacing: -0.02em;
  padding-right: 14.8rem;
`;
