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
  const [yOffset, setyOffset] = useState(0);
  // 현재 몇 번째 씬인지
  const [currentScene, setCurrentScene] = useState(0);
  const [componentHeightList, setComponentHeightList] = useState({});
  const [prev, setPrev] = useState(0);
  const [enterNewScene, setEnterNewScene] = useState(false);
  // 이전까지의 스크롤 높이가 몇인지( 현재 씬의 스크롤 비율을 구하기 위하여 )
  let prevScrollHeight = 0;
  let totalComponent = 3;
  let componentHeight = 612;

  //1 * window.innerHeight;

  // let enterNewScene = false;

  function scrollLoop() {
    setEnterNewScene(false);
    //enterNewScene = false;

    prevScrollHeight = 0;

    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += componentHeight;
    }

    setPrev(prevScrollHeight);
    //    console.log(currentScene, yOffset, prevScrollHeight, prev);

    if (yOffset > prevScrollHeight + componentHeight) {
      //enterNewScene = true;
      setEnterNewScene(true);
      if (currentScene + 1 >= totalComponent) {
        return;
      }
      setCurrentScene(currentScene + 1);
    }
    if (yOffset < prevScrollHeight) {
      setEnterNewScene(true);
      //enterNewScene = true;
      // 브라우저 바운스 효과로 -되는 것을 방지
      if (currentScene === 0) {
        return;
      }
      setCurrentScene(currentScene - 1);
    }
    // if (enterNewScene) {
    //   return;
    // }
  }

  const SetScroll = () => {
    setyOffset(window.pageYOffset + 0.7 * componentHeight);
    scrollLoop();
  };

  useEffect(() => {
    // 스크롤 이벤트를 추가, 페에지가 사라질 때는 스크롤 이벤트가 사라지도록
    window.addEventListener("scroll", SetScroll);
    return () => {
      window.removeEventListener("scroll", SetScroll);
    };
  }, [currentScene, yOffset]);

  return (
    <Wrapper>
      <ShopHeader isMenu={isMenu} setIsMenu={setIsMenu} />
      <Menu isMenu={isMenu} setIsMenu={setIsMenu} />
      <Dummy />
      <ShopProducts
        currentScene={currentScene}
        sceneNumber={0}
        yOffset={yOffset}
        componentHeightList={componentHeightList}
        setComponentHeightList={setComponentHeightList}
        prev={prev}
        enterNewScene={enterNewScene}
      />
      <ShopProducts
        currentScene={currentScene}
        sceneNumber={1}
        yOffset={yOffset}
        componentHeightList={componentHeightList}
        setComponentHeightList={setComponentHeightList}
        prev={prev}
        enterNewScene={enterNewScene}
      />
      <ShopProducts
        currentScene={currentScene}
        sceneNumber={2}
        yOffset={yOffset}
        componentHeightList={componentHeightList}
        setComponentHeightList={setComponentHeightList}
        prev={prev}
        enterNewScene={enterNewScene}
      />
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
