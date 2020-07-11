import React, { useRef } from "react";
import styled from "styled-components";

import MainHeader from "@src/components/organisms/Header/mainHeader";
import Footer from "@src/components/organisms/Footer/footer";

export default function IndexVideo(props) {
  const { isMenu, setIsMenu, videoRef, page } = props;

  return (
    <Wrapper>
      <MainHeader isMenu={isMenu} setIsMenu={setIsMenu} />
      <div>{page}</div>
      <video width="100%" loop autoPlay muted playsInline>
        <source
          src={
            "https://firebasestorage.googleapis.com/v0/b/esque-66147.appspot.com/o/esquevideo%2F%EC%98%81%EC%83%81%20%EC%98%88%EC%8B%9C1.mp4?alt=media&token=a583cc80-b418-455e-aa51-4b16102289d1"
          }
          type="video/mp4"
        />
      </video>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
