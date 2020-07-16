import React from "react";
import styled from "styled-components";

export default function HamHeart(props) {
  const { size } = props;
  return (
    <Wrapper>
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.17 0C21.59 0 19.14 1.08 17.36 2.97L17 3.36L16.64 2.97C14.86 1.08 12.4 0 9.83 0C4.44 0 0 4.71 0 10.57C0 12.99 0.81 15.39 2.32 17.4L17 33.75L31.54 17.56L32.45 16.26C33.46 14.55 34 12.58 34 10.57C34 4.71 29.56 0 24.17 0ZM31.1 15.15L31.09 15.17L30.27 16.35L17 30.97L3.6 16.16L3.59 16.14C2.35 14.51 1.7 12.59 1.7 10.57C1.7 5.81 5.31 1.89 9.83 1.89C12.42 1.89 14.85 3.2 16.33 5.4L17 6.41L17.67 5.4C19.13 3.2 21.56 1.89 24.17 1.89C28.69 1.89 32.3 5.81 32.3 10.57C32.31 12.22 31.87 13.82 31.1 15.15Z"
          fill="white"
        />
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  top: -0.2rem;
`;
