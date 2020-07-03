import React from "react";
import styled from "styled-components";

import VideoHeader from "@src/components/organisms/Header/videoHeader";
import Footer from "@src/components/organisms/Footer/footer";

export default function Video() {
  return (
    <Wrapper>
      <VideoHeader />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
