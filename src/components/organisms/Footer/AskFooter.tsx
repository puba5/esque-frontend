import React from "react";
import styled from "styled-components";

export default function AskFooter() {
  return (
    <Wrapper>
      <HeaderLine></HeaderLine>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  height: 7rem;
`;
const HeaderLine = styled.div`
  height: 0.1rem;
  width: 100%;
  background: #e4e4e4;
`;
