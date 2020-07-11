import React from "react";
import styled from "styled-components";
import Product from "@src/components/molecules/Desc/product";
import VideoFooterUp from "@src/components/organisms/Footer/videoFooterUp";

export default function VideoDetail() {
  return (
    <Wrapper>
      <VideoFooterUp />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  font-size: 1rem;
  width: 100%;
  height: 100%;
  background: #2b2b2b;
  opacity: 0.7;
  color: white;
`;
