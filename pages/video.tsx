import React from "react";
import styled from "styled-components";

import VideoHeader from "@src/components/organisms/Header/videoHeader";
import VideoFooter from "@src/components/organisms/Footer/videoFooter";

export default function Video() {
  return (
    <Wrapper>
      <VideoHeader />
      <video id="background-video" width="100%" height="100%" loop autoPlay muted>
        <source
          src={
            "https://firebasestorage.googleapis.com/v0/b/esque-66147.appspot.com/o/esquevideo%2F%EC%98%81%EC%83%81%20%EC%98%88%EC%8B%9C3.mp4?alt=media&token=af589c15-539a-474a-ac5b-b80a3566122e"
          }
          type="video/mp4"
        />
      </video>
      <VideoFooter />
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
