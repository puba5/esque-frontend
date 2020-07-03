import React from "react";
import styled from "styled-components";

import HambergerDivider from "@src/components/atoms/bar/hamberger_divider";
import HamHeart from "@src/components/atoms/mark/ham_heart";
import Close from "@src/components/atoms/mark/close";

export default function Menu() {
  return (
    <Wrapper>
      <ClosePosition>
        <Close />
      </ClosePosition>
      <List>
        <div>검색</div>
        <Slash>
          <HambergerDivider />
        </Slash>
        <div>브랜드 소개</div>
        <Slash>
          <HambergerDivider />
        </Slash>
        <div>
          <HamHeart />
        </div>
        <Slash>
          <HambergerDivider />
        </Slash>
        <div>공지사항</div>
        <Slash>
          <HambergerDivider />
        </Slash>
        <div>1:1문의</div>
      </List>
    </Wrapper>
  );
}

const ClosePosition = styled.div`
  position: fixed;
  margin-top: 5.6rem;
  margin-left: 33.7rem;
`;
const Wrapper = styled.div`
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
