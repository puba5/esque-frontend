import React from "react";
import styled from "styled-components";
import Hamberger from "@src/components/atoms/btn/hamberger";

export default function IndexHeader(props) {
  const { isMenu, setIsMenu } = props;
  const onClickButton = () => {
    if (isMenu == false) {
      setIsMenu(true);
    }
  };

  return (
    <Wrapper>
      <Top>
        <EsqueTV>Esque TV</EsqueTV>
        <Shop href="/shop">SHOP</Shop>
        <div onClick={onClickButton}>
          <Hamberger size={1} color={"white"} />
        </div>
      </Top>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 16.5rem;
  color: white;
  background-color: #fff;
  padding-top: 0.7rem;
  background: linear-gradient(
    180deg,
    rgba(2, 2, 2, 0.54) 0%,
    rgba(1, 1, 1, 0.306563) 63.54%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3.4rem;
`;

const EsqueTV = styled.p`
  padding-left: 1.9rem;
  padding-right: 3rem;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  height: auto;
  margin-bottom: 0;
`;

const Shop = styled.a`
  &:active {
    text-decoration: none;
    font-weight: bold;
    color: white;
  }
  font-size: 2rem;
  line-height: 3rem;
  font-style: normal;
  font-weight: normal;
  color: #ffffff;
  opacity: 0.6;
  letter-spacing: -0.02em;
  padding-right: 14.8rem;
`;

const Bottom = styled.div`
  padding-left: 1.9rem;
`;

const Desc = styled.p`
  margin-bottom: 0;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

const Where = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: bottom;
`;

const Country = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding-top: 0.46rem;
`;
const City = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-top: 0;
  margin-right: 0.5rem;
`;
