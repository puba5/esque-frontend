import React from "react";
import styled from "styled-components";

export default function Hamberger() {
  return (
    <Wrapper>
      <video id="background-video" loop autoPlay>
        <source src={"http://techslides.com/demos/sample-videos/small.mp4"} type="video/mp4" />
      </video>
      <div>video</div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
