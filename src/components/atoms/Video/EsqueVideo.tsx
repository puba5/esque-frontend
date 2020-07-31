import React from "react";
import styled from "styled-components";

export default function EsqueVideo(props) {
  const { videoRef, videoPoster, videoURL } = props;
  return (
    <Wrapper>
      <video ref={videoRef} width="100%" poster={videoPoster} autoPlay loop muted playsInline>
        <source src={videoURL} type="video/mp4" />
      </video>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
