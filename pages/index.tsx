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
  // const [isMenu, setIsMenu] = useState(0);
  // const slideRef = useRef(); //as React.MutableRefObject<HTMLInputElement>;
  // // const slideRef = useRef(null);
  // useEffect(() => {
  //   // slideRef.current.style.position = "fixed";
  //   // slideRef.current.style.overflow = "hidden";
  //   slideRef.current.style.transform = `translateX(-${isMenu}00vw)`;
  // });

  // const [currentSlide, setCurrentSlide] = useState(0);
  // const slideRef = useRef(null);

  // let page = 1;
  // useEffect(() => {
  //   slideRef.current.style.transition = "all 0.5s ease-in-out";
  //   slideRef.current.style.transform = `translateY(${currentSlide}00vh)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  // }, [currentSlide]);
  // let y = 0;
  // let gap = 0;

  // document.addEventListener(
  //   "touchstart",
  //   (event) => {
  //     console.log("valueChange");
  //     y = event.touches[0].clientY;
  //   },
  //   false
  // );
  // document.addEventListener("touchmove", () => {}, false);
  // document.addEventListener(
  //   "touchend",
  //   (event) => {
  //     console.log("touchEnd");
  //     gap = event.changedTouches[0].clientY - y;
  //     if (gap < -50) {
  //       setCurrentSlide(currentSlide + 1);
  //     } else if (gap > 50) {
  //       setCurrentSlide(currentSlide - 1);
  //     }
  //     if (page < 0) {
  //     } else if (page > 1) {
  //     }
  //     console.log("client", gap, currentSlide);
  //   },
  //   false
  // );

  // return (
  //   <Wrapper ref={slideRef}>
  //     <IndexVideo />
  //     <Video page={page} />
  //   </Wrapper>
  // );

  return (
    <Wrapper>
      <IndexVideo isMenu={isMenu} setIsMenu={setIsMenu} />
      <Video isMenu={isMenu} setIsMenu={setIsMenu} />
      <Menu isMenu={isMenu} setIsMenu={setIsMenu} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  overflow: hidden;
`;
