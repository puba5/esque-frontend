import React from "react";
import styled from "styled-components";

export default function Footer() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 31.8rem;
  transform: rotate(180deg);
  bottom: 0;
  background: linear-gradient(
    179.66deg,
    rgba(2, 2, 2, 0.54) 0.35%,
    rgba(1, 1, 1, 0.30375) 72.24%,
    rgba(0, 0, 0, 0) 99.65%
  );
`;

const Logo = styled.img`
  width: 5rem;
  height: auto;
`;
