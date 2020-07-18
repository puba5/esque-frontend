import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ShopHeader from "@src/components/organisms/Header/ShopHeader";
import ShopProducts from "@src/components/organisms/productList/shopProducts";
import Menu from "@src/components/organisms/Menu/menu";
import ShopFooter from "@src/components/organisms/Footer/ShopFooter";

export default function Shop() {
  // 서버사이드렌더링을 하게되면, window가 생성 X, 이 문제를 해결하기 위해
  if (!process.browser) {
    return <div></div>;
  }
  const [isMenu, setIsMenu] = useState(false);
  // 현재 스크롤 좌표
  const [yyOffset, setyOffset] = useState(0);
  // 현재 몇 번째 씬인지
  const [currentScene, setCurrentScene] = useState(0);

  // 이전까지의 스크롤 높이가 몇인지( 현재 씬의 스크롤 비율을 구하기 위하여 )
  let prevScrollHeight = 0;
  let totalComponent = 3;
  let componentHeight = 2 * window.innerHeight;

  let enterNewScene = false;

  let yOffset = 0;

  function scrollLoop() {
    enterNewScene = false;
    setyOffset(yOffset);
    console.log(currentScene, yOffset);

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
    }
    if (yOffset < prevScrollHeight) {
      enterNewScene = true;
      // 브라우저 바운스 효과로 -되는 것을 방지
      if (currentScene === 0) {
        return;
      }
      setCurrentScene(currentScene - 1);
    }
    if (enterNewScene) {
      return;
    }
  }

  const SetScroll = () => {
    yOffset = window.pageYOffset;
    scrollLoop();
  };

  useEffect(() => {
    // 스크롤 이벤트를 추가, 페에지가 사라질 때는 스크롤 이벤트가 사라지도록
    window.addEventListener("scroll", SetScroll);
    return () => {
      window.removeEventListener("scroll", SetScroll);
    };
  }, [currentScene]);

  return (
    <Wrapper>
      <ShopHeader isMenu={isMenu} setIsMenu={setIsMenu} />
      <Menu isMenu={isMenu} setIsMenu={setIsMenu} />
      <Dummy />
      <ShopProducts currentScene={currentScene} sceneNumber={0} yOffset={yyOffset} />
      <ShopProducts currentScene={currentScene} sceneNumber={1} yOffset={yyOffset} />
      <ShopProducts currentScene={currentScene} sceneNumber={2} yOffset={yyOffset} />
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
  z-index: 1000;
  position: fixed;
  font-size: 3rem;
`;
