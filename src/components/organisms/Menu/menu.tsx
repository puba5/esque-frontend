import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import HambergerDivider from "@src/components/atoms/bar/hamberger_divider";
import HamHeart from "@src/components/atoms/mark/ham_heart";
import Close from "@src/components/atoms/mark/close";

export default function Menu(props) {
  const { isMenu, setIsMenu } = props;

  const slideRef = useRef(null);

  useEffect(() => {
    if (isMenu) {
      slideRef.current.style.transform = `translate3d(0vw,0,0)`;
    } else {
      slideRef.current.style.transform = `translate3d(100vw,0,0)`;
    }
  });

  const closeMenu = () => {
    setIsMenu(false);
  };

  return (
    <Wrapper ref={slideRef}>
      <ClosePosition onClick={closeMenu}>
        <Close size={1.6} />
      </ClosePosition>
      <List>
        <PageMoveButton>검색</PageMoveButton>
        <Slash>
          <HambergerDivider />
        </Slash>
        <PageMoveButton>브랜드 소개</PageMoveButton>
        <Slash>
          <HambergerDivider />
        </Slash>
        <PageMoveButton href="/myPage">
          <HamHeart />
        </PageMoveButton>
        <Slash>
          <HambergerDivider />
        </Slash>
        <PageMoveButton>공지사항</PageMoveButton>
        <Slash>
          <HambergerDivider />
        </Slash>
        <PageMoveButton href="/askPage">1:1문의</PageMoveButton>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  z-index: 101;
  transform: translate3d(100vw, 0, 0);
  background: #2b2b2b;
  height: 100%;
  width: 100%;
  color: white;
  position: fixed;
  opacity: 0.9;
  font-size: 3rem;
  line-height: 4rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.6px;
  transition: all 0.2s ease-in-out;
`;

const ClosePosition = styled.div`
  position: fixed;
  top: 0.3rem;
  right: 2rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 21.8rem;
`;

const Slash = styled.div`
  height: 4.6rem;
`;

const PageMoveButton = styled.a`
  text-decoration: none;
  color: white;
  &:active {
    text-decoration: none;
    font-weight: bold;
    color: white;
  }
`;
