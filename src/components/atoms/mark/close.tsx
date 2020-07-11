import React from "react";
import styled from "styled-components";

export default function Close() {
  return (
    <Wrapper>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L23 23" stroke="white" strokeWidth="2" />
        <path d="M1 23L23 1" stroke="white" strokeWidth="2" />
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
