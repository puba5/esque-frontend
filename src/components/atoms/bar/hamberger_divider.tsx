import React from "react";
import styled from "styled-components";

export default function HambergerDivider() {
  return (
    <Wrapper>
      <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10 1.5H0V0.5H10V1.5Z" fill="white" />
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
