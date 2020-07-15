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
    return <Wrapper></Wrapper>;
  }
  const [isMenu, setIsMenu] = useState(false);
  let currentScene = 0;
  let prevScrollHeight = 0;
  let totalComponent = 3;
  let componentHeight = 1.4 * window.innerHeight;

  let enterNewScene = false;

  let yOffset = 0;

  function scrollLoop() {
    enterNewScene = false;

    console.log("prev", prevScrollHeight);

    prevScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += componentHeight;
    }

    if (yOffset > prevScrollHeight + componentHeight) {
      console.log("oh");
      enterNewScene = true;
      if (currentScene + 1 >= totalComponent) {
        return;
      }

      currentScene += 1;
    }
    if (yOffset < prevScrollHeight) {
      console.log("my");
      enterNewScene = true;
      // 브라우저 바운스 효과로 -되는 것을 방지
      if (currentScene === 0) {
        return;
      }

      currentScene -= 1;
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

  const AA = useRef(null);
  function playAnimation() {
    let values = sceneInfo[currentScene].values;
    let currentYOffset = yOffset - prevScrollHeight;
    const scrollHeight = componentHeight;
    const scrollRatio = currentYOffset / scrollHeight;
    console.log("hello", currentScene, currentYOffset, scrollRatio);
    switch (currentScene) {
      case 0:
        AA.current.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
        AA.current.style.transform = `translateY(${calcValues(
          values.messageA_translateY_in,
          currentYOffset
        )}% )`;
        break;
      case 1:
        AA.current.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
        AA.current.style.transform = `translateY(${calcValues(
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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      yOffset = window.pageYOffset;
      console.log("currentScroll", yOffset, currentScene);
      scrollLoop();
    });
  }, []);

  return (
    <Wrapper>
      <ShopHeader isMenu={isMenu} setIsMenu={setIsMenu} />
      <Menu isMenu={isMenu} setIsMenu={setIsMenu} />
      <Dummy />
      <ShopProducts newRef={AA} />
      <ShopProducts newRef={AA} />
      <ShopProducts newRef={AA} />
      <ShopFooter />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Dummy = styled.div`
  height: 11.2rem;
`;
