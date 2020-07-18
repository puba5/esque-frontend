import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ShopHeader from "@src/components/organisms/Header/ShopHeader";
import ShopProducts from "@src/components/organisms/productList/shopProducts";
import Menu from "@src/components/organisms/Menu/menu";
import ShopFooter from "@src/components/organisms/Footer/ShopFooter";

const sceneInfo = [
  {
    type: "message",
    heightNum: 1.5,
    scrollHeight: 0,
    values: {
      // values에는 변화의 시작 값, 끝 값, 변화의 시작과 끝 시간(비율)
      messageA_opacity_in: [1, 0, { start: 0.1, end: 0.2 }],
      messageB_opacity_in: [1, 0, { start: 0.15, end: 0.25 }],
      messageC_opacity_in: [0, 1, { start: 0.2, end: 0.3 }],
      messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
      messageB_translateY_in: [20, 0, { start: 0.15, end: 0.25 }],
      messageC_translateY_in: [20, 0, { start: 0.2, end: 0.3 }],
    },
    objs: {
      container: null,
      messageA: null,
      messageB: null,
      messageC: null,
    },
  },
  {
    type: "message",
    heightNum: 1.5,
    scrollHeight: 0,
    values: {
      // values에는 변화의 시작 값, 끝 값, 변화의 시작과 끝 시간(비율)
      messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
      messageB_opacity_in: [0, 1, { start: 0.15, end: 0.25 }],
      messageC_opacity_in: [0, 1, { start: 0.2, end: 0.3 }],
      messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
      messageB_translateY_in: [20, 0, { start: 0.15, end: 0.25 }],
      messageC_translateY_in: [20, 0, { start: 0.2, end: 0.3 }],
    },
    objs: {
      container: null,
      messageA: null,
      messageB: null,
      messageC: null,
    },
  },
  {
    type: "text",
    heightNum: 1,
    scrollHeight: 0,
    values: {},
    objs: {
      container: null,
    },
  },
  {
    type: "message",
    heightNum: 1.5,
    scrollHeight: 0,
    values: {
      // values에는 변화의 시작 값, 끝 값, 변화의 시작과 끝 시간(비율)
      messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
      messageB_opacity_in: [0, 1, { start: 0.15, end: 0.25 }],
      messageC_opacity_in: [0, 1, { start: 0.2, end: 0.3 }],
      messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
      messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
      messageB_translateY_in: [20, 0, { start: 0.15, end: 0.25 }],
      messageC_translateY_in: [20, 0, { start: 0.2, end: 0.3 }],
      messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
    },
    objs: {
      container: null,
      messageA: null,
      messageB: null,
      messageC: null,
      messageD: null,
    },
  },
];

export default function Shop() {
  // 서버사이드렌더링을 하게되면, window가 생성 X, 이 문제를 해결하기 위해
  if (!process.browser) {
    return <div></div>;
  }
  const [isMenu, setIsMenu] = useState(false);
  const [yyOffset, setyOffset] = useState(0);
  const [currentScene, setCurrentScene] = useState(0);
  // let currentScene = 0;
  let prevScrollHeight = 0;
  let totalComponent = 3;
  let componentHeight = 1.4 * window.innerHeight;

  let enterNewScene = false;

  let yOffset = 0;

  const AA1 = useRef(null);
  const AA2 = useRef(null);
  const AA3 = useRef(null);

  function scrollLoop() {
    enterNewScene = false;
    setyOffset(yOffset);
    console.log(currentScene, yOffset);
    AA.current.style.opacity = opa;
    //    console.log("opa", opa);

    prevScrollHeight = 0;

    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += componentHeight;
    }

    if (yOffset > prevScrollHeight + componentHeight) {
      enterNewScene = true;
      if (currentScene + 1 >= totalComponent) {
        return;
      }
      setCurrentScene(currentScene + 1);
      // currentScene += 1;
    }
    if (yOffset < prevScrollHeight) {
      enterNewScene = true;
      // 브라우저 바운스 효과로 -되는 것을 방지
      if (currentScene === 0) {
        return;
      }
      setCurrentScene(currentScene - 1);
      // currentScene -= 1;
    }
    if (enterNewScene) {
      return;
    }
    playAnimation();
  }

  // 화면 비율을 구하여 알맞은 값을 계산
  function calcValues(values, currentYOffset) {
    let retValues;
    // 현재 씬에서 스크롤된 범위로 구하기
    const scrollHeight = componentHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    if (values[2]) {
      // start~end 사이에 애니메이션 실행
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const PartScrollHeight = partScrollEnd - partScrollStart;

      if (partScrollStart <= currentYOffset && currentYOffset <= partScrollEnd) {
        retValues =
          ((currentYOffset - partScrollStart) / PartScrollHeight) * (values[1] - values[0]) +
          values[0];
      } else if (partScrollStart > currentYOffset) {
        retValues = values[0];
      } else if (partScrollEnd < currentYOffset) {
        retValues = values[1];
      }
    } else {
      retValues = scrollRatio * (values[1] - values[0]) + values[0];
    }
    return retValues;
  }
  const [opa, setOpa] = useState(0);
  const AA = useRef(null);
  function playAnimation() {
    let values = sceneInfo[currentScene].values;
    let currentYOffset = yOffset - prevScrollHeight;
    const scrollHeight = componentHeight;
    const scrollRatio = currentYOffset / scrollHeight;

    switch (currentScene) {
      case 0:
        setOpa(calcValues(values.messageA_opacity_in, currentYOffset));
        // AA1.current.style.opacity = opa;
        AA1.current.style.transform = `translateY(${calcValues(
          values.messageA_translateY_in,
          currentYOffset
        )}% )`;
        break;
      case 1:
        //AA2.current.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
        AA2.current.style.transform = `translateY(${calcValues(
          values.messageA_translateY_in,
          currentYOffset
        )}% )`;
        break;
      case 2:
        break;
      default:
        break;
    }
  }

  const SetScroll = () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  };
  // document.addEventListener("touchmove", () => {}, { passive: false });

  useEffect(() => {
    // 스크롤 이벤트를 추가, 페에지가 사라질 때는 스크롤 이벤트가 사라지도록
    window.addEventListener("scroll", SetScroll);
    return () => {
      window.removeEventListener("scroll", SetScroll);
    };
  }, [currentScene, opa]);

  return (
    <Wrapper>
      <ShopHeader isMenu={isMenu} setIsMenu={setIsMenu} />
      <Menu isMenu={isMenu} setIsMenu={setIsMenu} />
      <Dummy />
      <TimeValue ref={AA}>{yyOffset}</TimeValue>
      <ShopProducts newRef={AA1} />
      <ShopProducts newRef={AA2} />
      <ShopProducts newRef={AA3} />
      <ShopFooter />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overscroll-behavior: contain;
`;

const Dummy = styled.div`
  height: 11.2rem;
`;

const TimeValue = styled.div`
  position: fixed;
  font-size: 3rem;
`;
