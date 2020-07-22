import React from "react";
import styled from "styled-components";

import Footer from "@src/components/organisms/Footer/footer";

export default function IndexVideo(props) {
  const { videoRef, page, currentPageNum } = props;

  return (
    <Wrapper>
      <div>{page}</div>
      <video ref={videoRef} width="100%" loop autoPlay muted playsInline>
        <source
          src={
            "https://firebasestorage.googleapis.com/v0/b/esque-7491c.appspot.com/o/packages%2FesqueTV_main_video.mp4?alt=media&token=91643779-44e2-4217-bf7a-e9fd33316fbe"
          }
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
