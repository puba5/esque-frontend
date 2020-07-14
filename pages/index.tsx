import React, { useRef, useState } from "react";
import styled from "styled-components";

import IndexHeader from "@src/components/organisms/Header/IndexHeader";
import IndexVideo from "@src/components/organisms/Video/indexVideo";
import Video from "@src/components/organisms/Video/video";
import Menu from "@src/components/organisms/Menu/menu";

export default function Home() {
  if (!process.browser) {
    return <div></div>;
  }
  const [isMenu, setIsMenu] = useState(false);

  // 모든 videoComponent에 slideRef 인자를 주기 위하여 slideRef 리스트 생성
  const slideRef = [];

  let totalPageList = 3;
  // 페이지 개수만큼 생성
  for (let i = 0; i < totalPageList; i++) {
    slideRef.push(useRef(null));
  }

  let currentPage = 0;
  let startY = 0;
  let gapY = 0;

  // 터치 시작
  document.addEventListener(
    "touchstart",
    (event) => {
      console.log("valueChange");
      // 첫번째 터치의 Y 값을 구한다
      startY = event.touches[0].clientY;
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
      gapY = event.changedTouches[0].clientY - startY;
      if (gapY < -50) {
        currentPage = 0;
        // 슬라이드를 위로 올림
        slideRef[0].current.style.transition = "all 0.5s ease-in-out";
        slideRef[0].current.style.transform = `translateY(0vh)`;
      } else if (gapY > 50) {
        currentPage = 1;
        // 슬라이드를 아래로 내림
        slideRef[0].current.style.transition = "all 0.5s ease-in-out";
        slideRef[0].current.style.transform = `translateY(100vh)`;
      }
    },
    false
  );

  return (
    <Wrapper>
      <IndexHeader isMenu={isMenu} setIsMenu={setIsMenu} />
      <IndexVideo />
      <Video slideRef={slideRef[0]} />
      <Menu isMenu={isMenu} setIsMenu={setIsMenu} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
`;
