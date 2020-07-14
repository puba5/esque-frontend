import React from "react";
import styled from "styled-components";

export default function BackButton(props) {
  const { size, color } = props;
  return (
    <Wrapper>
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M23 6L12 17L23 28" stroke="#2B2B2B" strokeWidth="3" />
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
