import React from "react";
import styled from "styled-components";

export default function HeartFilled(props) {
  const { color, size } = props;
  return (
    <Wrapper>
      <svg
        width={`${4 * size}rem`}
        height={`${5 * size}rem`}
        viewBox="0 0 40 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0442 26.8057L20.5 34L26.8981 26.8738L27.3019 26.2985C27.7577 25.5316 28 24.6471 28 23.7441C28 21.1277 26.0154 19 23.575 19C22.4096 19 21.3019 19.4886 20.5 20.3422C19.6981 19.4886 18.5904 19 17.425 19C14.9846 19 13 21.1277 13 23.7441C13 24.8326 13.3635 25.9089 14.0442 26.8057Z"
          fill="#2B2B2B"
        />
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
