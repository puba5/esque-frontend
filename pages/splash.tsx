import React from "react";
import styled from "styled-components";
import MainHeader from "@src/components/organisms/Header/mainHeader";
export default function Splash() {
  return (
    <Wrapper>
      <MainHeader />
      <video id="background-video" width="100%" height="100%" loop autoPlay muted>
        <source
          src={
            "https://firebasestorage.googleapis.com/v0/b/esque-66147.appspot.com/o/esquevideo%2F%EC%98%81%EC%83%81%20%EC%98%88%EC%8B%9C2.mp4?alt=media&token=56420913-8403-4937-9487-a74338196173"
          }
          type="video/mp4"
        />
      </video>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
