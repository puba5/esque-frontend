import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ShopHeader from "@src/components/organisms/Header/ShopHeader";
import ShopProductList from "@src/components/organisms/productList/shopProductList";
import Menu from "@src/components/organisms/Menu/menu";
import ShopFooter from "@src/components/organisms/Footer/ShopFooter";

import axios from "axios";

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

  // 데이터 초기 값 설정
  const [packageDataList, setPackageDataList] = useState([
    { products: [] },
    { products: [] },
    { products: [] },
    { products: [] },
    { products: [] },
    { products: [] },
  ]);

  // 이전까지의 스크롤 높이가 몇인지( 현재 씬의 스크롤 비율을 구하기 위하여

  let totalComponent = packageDataList.length;

  function scrollLoop() {
    let prevScrollHeight = 0;

    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += componentHeightList[i];
    }

    setPrev(prevScrollHeight);

    if (yOffset > prevScrollHeight + componentHeightList[currentScene]) {
      if (currentScene + 1 >= totalComponent) {
        return;
      } else {
        setCurrentScene(currentScene + 1);
      }
    }
    if (yOffset < prevScrollHeight) {
      // 브라우저 바운스 효과로 -되는 것을 방지
      if (currentScene === 0) {
        return;
      } else {
        setCurrentScene(currentScene - 1);
      }
    }
  }

  const SetScroll = () => {
    setyOffset(window.pageYOffset + 0.5 * componentHeightList[0]);
    scrollLoop();
  };

  useEffect(() => {
    // 스크롤 이벤트를 추가, 페에지가 사라질 때는 스크롤 이벤트가 사라지도록
    window.addEventListener("scroll", SetScroll);
    return () => {
      window.removeEventListener("scroll", SetScroll);
    };
  }, [currentScene, yOffset]);

  useEffect(() => {
    // 상품 정보 데이터를 가져옴
    axios
      .get("https://esque.store/commerce/packages/", {
        params: {},
      })
      .then(function (response) {
        // 데이터를 저장
        setPackageDataList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <Wrapper>
      <ShopHeader isMenu={isMenu} setIsMenu={setIsMenu} />
      <Menu isMenu={isMenu} setIsMenu={setIsMenu} />
      <Dummy />
      {packageDataList.map((packageData, index) => {
        return (
          <ShopProductList
            packageData={packageData}
            currentScene={currentScene}
            sceneNumber={index}
            yOffset={yOffset}
            componentHeightList={componentHeightList}
            setComponentHeightList={setComponentHeightList}
            prev={prev}
          />
        );
      })}
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
