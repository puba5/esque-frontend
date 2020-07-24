import React from "react";
import styled from "styled-components";

import Footer from "@src/components/organisms/Footer/footer";

export default function IndexVideo(props) {
  const { videoRef, page, currentPageNum } = props;

  return (
    <Wrapper>
      <div>{page}</div>
      <video
        ref={videoRef}
        poster={"https://esque.s3.ap-northeast-2.amazonaws.com/packages/esqueTV_main_thum.jpg"}
        width="100%"
        loop
        autoPlay
        muted
        playsInline
      >
        <source
          src={"https://esque.s3.ap-northeast-2.amazonaws.com/packages/esqueTV_main_video.mp4"}
          type="video/mp4"
        />
      </video>
      {currentPageNum === 0 && <Footer />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
