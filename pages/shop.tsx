import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ShopHeader from "@src/components/organisms/Header/ShopHeader";
import ShopProducts from "@src/components/organisms/productList/shopProducts";
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
  const [enterNewScene, setEnterNewScene] = useState(false);

  const [productDataList, setProductDataList] = useState({});

  // 이전까지의 스크롤 높이가 몇인지( 현재 씬의 스크롤 비율을 구하기 위하여 )

  let totalComponent = Object.keys(productDataList).length;
  let componentHeight = 729;

  function scrollLoop() {
    console.log("SIZSE", Object.keys(componentHeightList).length);
    setEnterNewScene(false);
    //enterNewScene = false;

    let prevScrollHeight = 0;

    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += componentHeight;
    }

    setPrev(prevScrollHeight);

    if (yOffset > prevScrollHeight + componentHeight) {
      setEnterNewScene(true);
      if (currentScene + 1 >= totalComponent) {
        return;
      } else {
        setCurrentScene(currentScene + 1);
      }
    }
    if (yOffset < prevScrollHeight) {
      setEnterNewScene(true);
      // 브라우저 바운스 효과로 -되는 것을 방지
      if (currentScene === 0) {
        return;
      } else {
        setCurrentScene(currentScene - 1);
      }
    }
  }

  const SetScroll = () => {
    setyOffset(window.pageYOffset + 0.5 * componentHeight);
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
      .get("https://esque.store/commerce/products/", {
        params: {},
      })
      .then(function (response) {
        let processedData = {};
        // 데이터를 분석하여 같은 패키지끼리 묶어준다.
        for (let product of response.data) {
          if (processedData[product.package]) {
            processedData[product.package].push(product);
          } else {
            processedData[product.package] = [product];
          }
        }
        setProductDataList(processedData);
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
      {Object.keys(productDataList).map((key, index) => {
        return (
          <ShopProducts
            productData={productDataList[key]}
            currentScene={currentScene}
            sceneNumber={index}
            yOffset={yOffset}
            componentHeightList={componentHeightList}
            setComponentHeightList={setComponentHeightList}
            prev={prev}
            enterNewScene={enterNewScene}
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
