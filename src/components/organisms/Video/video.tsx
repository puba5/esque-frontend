import React, { useState } from "react";
import styled from "styled-components";

import VideoFooter from "@src/components/organisms/Footer/videoFooter";
import VideoFooterUp from "@src/components/organisms/Footer/videoFooterUp";

export default function Video(props) {
  const { videoRef } = props;
  const [isFooterUp, setIsFooterUp] = useState(false);
  return (
    <Wrapper ref={videoRef}>
      <video width="100%" loop autoPlay muted>
        <source
          src={
            "https://firebasestorage.googleapis.com/v0/b/esque-66147.appspot.com/o/esquevideo%2F%EC%98%81%EC%83%81%20%EC%98%88%EC%8B%9C3.mp4?alt=media&token=af589c15-539a-474a-ac5b-b80a3566122e"
          }
          type="video/mp4"
        />
      </video>
      {!isFooterUp && <VideoFooter setIsFooterUp={setIsFooterUp} />}
      {isFooterUp && <VideoFooterUp setIsFooterUp={setIsFooterUp} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  z-index: 1;
  position: fixed;
  width: 100vw;
  height: 100vh;
  transform: translate3d(0, 100vh, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
