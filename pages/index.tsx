import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import IndexVideo from "@src/components/organisms/Video/indexVideo";
import Video from "@src/components/organisms/Video/video";
import Menu from "@src/components/organisms/Menu/menu";

export default function Home() {
  if (!process.browser) {
    return <div></div>;
  }
  const [isMenu, setIsMenu] = useState(1);

  // 모든 videoComponent에 slideRef 인자를 주기 위하여 slideRef 리스트 생성
  const slideRef = [];
  let totalPageList = 3;
  // 페이지 개수만큼 생성
  for (let i = 0; i < totalPageList; i++) {
    slideRef.push(useRef(null));
  }

  let page = 0;
  let y = 0;
  let gap = 0;

  // 터치 시작
  document.addEventListener(
    "touchstart",
    (event) => {
      console.log("valueChange");
      // 첫번째 터치의 Y 값을 구한다
      y = event.touches[0].clientY;
    },
    false
  );
  // 터치 이동
  document.addEventListener("touchmove", () => {}, false);
  // 터치 끝
  document.addEventListener(
    "touchend",
    (event) => {
      console.log("touchEnd");
      gap = event.changedTouches[0].clientY - y;
      if (gap < -50) {
        page = 0;
        // 슬라이드를 위로 올림
        slideRef[0].current.style.transition = "all 0.5s ease-in-out";
        slideRef[0].current.style.transform = `translateY(0vh)`;
      } else if (gap > 50) {
        page = 1;
        // 슬라이드를 아래로 내림
        slideRef[0].current.style.transition = "all 0.5s ease-in-out";
        slideRef[0].current.style.transform = `translateY(100vh)`;
      }
    },
    false
  );

  return (
    <Wrapper>
      <IndexVideo isMenu={isMenu} setIsMenu={setIsMenu} />
      <Video isMenu={isMenu} setIsMenu={setIsMenu} videoRef={slideRef[0]} />
      <Menu isMenu={isMenu} setIsMenu={setIsMenu} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
`;
