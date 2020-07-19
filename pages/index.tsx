import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import IndexHeader from "@src/components/organisms/Header/IndexHeader";
import IndexVideo from "@src/components/organisms/Video/indexVideo";
import Video from "@src/components/organisms/Video/video";
import Menu from "@src/components/organisms/Menu/menu";

export default function Home() {
  if (!process.browser) {
    return <div></div>;
  }

  const [isMenu, setIsMenu] = useState(false);
  const [currentPageNum, setCurrentPageNum] = useState(0);

  // 모든 videoComponent에 slideRef 인자를 주기 위하여 slideRef 리스트 생성
  const slideRef = [];
  const videoRef = [];

  let totalPageListCnt = 2;
  // 페이지 개수만큼 생성
  for (let i = 0; i <= totalPageListCnt; i++) {
    slideRef.push(useRef(null));
    videoRef.push(useRef(null));
  }

  let currentPage = 0;
  let startY = 0;
  let gapY = 0;

  useEffect(() => {
    // 터치 시작
    document.addEventListener(
      "touchstart",
      (event) => {
        // 첫번째 터치의 Y 값을 구한다
        startY = event.touches[0].clientY;
      },
      false
    );

    document.addEventListener(
      "touchend",
      (event) => {
        gapY = event.changedTouches[0].clientY - startY;
        if (gapY < -50) {
          // 슬라이드를 위로 올림
          console.log("UP", currentPage);
          // 맨 마지막 페이지면, 내려가지 않도록
          if (currentPage >= totalPageListCnt) {
            console.log("NoMorePage");
            return;
          }
          // 페에지 바꾸기 전에 비디오를 정지시키고, 새로운 비디오는 비디오를 재생
          videoRef[currentPage].current.pause();
          currentPage++;
          videoRef[currentPage].current.play();
          slideRef[currentPage].current.style.transition = "all 0.5s ease-in-out";
          slideRef[currentPage].current.style.transform = `translateY(0vh)`;
        } else if (gapY > 50) {
          // 슬라이드를 아래로 내림
          console.log("DOWN", currentPage);
          // 맨 첫번째 페이지면, 올라가지 않도록
          if (currentPage <= 0) {
            console.log("NoMorePage");
            return;
          }
          // 페에지 바꾸기 전에 비디오를 정지시키고, 새로운 비디오는 비디오를 재생
          videoRef[currentPage].current.pause();
          slideRef[currentPage].current.style.transition = "all 0.5s ease-in-out";
          slideRef[currentPage].current.style.transform = `translateY(100vh)`;
          currentPage--;
          videoRef[currentPage].current.play();
        }
        setCurrentPageNum(currentPage);
      },
      false
    );
  }, []);

  return (
    <Wrapper>
      <IndexHeader isMenu={isMenu} setIsMenu={setIsMenu} videoRef={videoRef[currentPageNum]} />
      <IndexVideo videoRef={videoRef[0]} />
      <Video slideRef={slideRef[1]} videoRef={videoRef[1]} />
      <Video slideRef={slideRef[2]} videoRef={videoRef[2]} />
      <Menu isMenu={isMenu} setIsMenu={setIsMenu} videoRef={videoRef[currentPageNum]} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  overflow: hidden;
`;
