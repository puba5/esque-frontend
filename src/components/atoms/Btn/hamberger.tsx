import React from "react";
import styled from "styled-components";

export default function Hamberger({ size, color }) {
  return (
    <Wrapper>
      <svg
        width={30 * size}
        height={30 * size}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 8H23" stroke={color} strokeWidth="2" />
        <path d="M7 15H23" stroke={color} strokeWidth="2" />
        <path d="M7 22H23" stroke={color} strokeWidth="2" />
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
