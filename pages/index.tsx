import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import IndexVideo from "@src/components/organisms/Video/indexVideo";
import Video from "../src/components/organisms/Video/video";

export default function Home() {
  if (!process.browser) {
    return <div></div>;
  }
  const [currentSlide, setCurrentSlide] = useState(0);

  let page = 1;
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateY(${currentSlide}00vh)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
  let y = 0;
  let gap = 0;

  document.addEventListener(
    "touchstart",
    (event) => {
      console.log("valueChange");
      y = event.touches[0].clientY;
    },
    false
  );
  document.addEventListener("touchmove", () => {}, false);
  document.addEventListener(
    "touchend",
    (event) => {
      console.log("touchEnd");
      gap = event.changedTouches[0].clientY - y;
      if (gap < -50) {
        setCurrentSlide(currentSlide + 1);
      } else if (gap > 50) {
        setCurrentSlide(currentSlide - 1);
      }
      if (page < 0) {
      } else if (page > 1) {
      }
      console.log("client", gap, currentSlide);
    },
    false
  );
  const slideRef = useRef(null);

  return (
    <Wrapper ref={slideRef}>
      <IndexVideo />
      <Video page={page} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  overflow: hidden;
`;
