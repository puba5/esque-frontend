import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// 슬라이드 개수
const TOTAL_SLIDES = 2;

export default function Slider() {
  if (!process.browser) {
    return <div></div>;
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickLocation, setClickLocation] = useState({ x: 0 });
  const [moveLoaction, setMoveLoaction] = useState({});
  let touching = true;
  let x = 0;
  document.addEventListener(
    "touchstart",
    (event) => {
      console.log("touchstart", touching);
      if (touching) {
        console.log("valueChange");
        x = event.touches[0].clientX;
        //setClickLocation({ x: event.touches[0].clientX });
      }
    },
    touching
  );
  document.addEventListener("touchmove", () => {}, false);
  document.addEventListener(
    "touchend",
    (event) => {
      console.log("touchEnd");
      let gap = event.changedTouches[0].clientX - x;
      console.log("client", gap);
      //console.log("clientX", event.changedTouches[0].clientX - x);
      if (gap < -200) {
        if (currentSlide >= TOTAL_SLIDES) {
          // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
          setCurrentSlide(0);
        } else {
          setCurrentSlide(currentSlide + 1);
        }
      }
    },
    false
  );

  if (document.addEventListener) {
    document.addEventListener("click", resultFun, false);
  } else {
    // document.click = resultFun;
  }
  function resultFun(e) {
    //console.log(e);

    var positionLeft = e.clientX;
    var positionTop = e.clientY;
    //  console.log(positionLeft, positionTop);
  }

  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00vw)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
  return (
    <Container>
      {currentSlide}
      <SliderContainer ref={slideRef}>
        <Slide1 />
        <Slide2 />
        <Slide3 />
      </SliderContainer>
      <Button onClick={prevSlide}>Previous Slide</Button>
      <Button onClick={nextSlide}>Next Slide</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 60%;
  overflow: hidden;
`;

const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  position: fixed;
  display: flex;
`;

const Slide1 = styled.div`
  width: 100vw;
  height: 70vh;
  background: blue;
`;
const Slide2 = styled.div`
  width: 100vw;
  height: 70vh;
  background: red;
`;
const Slide3 = styled.div`
  width: 100vw;
  height: 70vh;
  background: yellow;
`;
// 이미지들을 가로로 나열합니다.
