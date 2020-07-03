import React from "react";
import styled from "styled-components";
import MainHeader from "@src/components/organisms/Header/mainHeader";
export default function Splash() {
  return (
    <Wrapper>
      <MainHeader />
      <video id="background-video" width="100%" height="100%" loop autoPlay>
        <source
          src={
            "https://firebasestorage.googleapis.com/v0/b/esque-66147.appspot.com/o/esquevideo%2F%EC%98%81%EC%83%81%20%EC%98%88%EC%8B%9C1.mp4?alt=media&token=a583cc80-b418-455e-aa51-4b16102289d1"
          }
          type="video/mp4"
        />
      </video>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
