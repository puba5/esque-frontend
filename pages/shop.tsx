import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ShopHeader from "@src/components/organisms/Header/ShopHeader";
import ShopProductList from "@src/components/organisms/productList/shopProductList";
import Menu from "@src/components/organisms/Menu/menu";
import ShopFooter from "@src/components/organisms/Footer/ShopFooter";

import axios from "axios";

// tv 순서 결정,
let EsqueTVOrder = [
  { id: 5, textTop: "와인에 곁들일", textBottom: "스페인 타파스 어때요?", align: "right" },
  { id: 1, textTop: "이번 주말은 특별하게", textBottom: "영국식 피크닉", align: "right" },
  { id: 3, textTop: "마카롱이 시작된 곳,", textBottom: "파리를 맛보다", align: "left" },
  { id: 0, textTop: "독일 로스터리", textBottom: "여유로움 느껴보기", align: "left" },
  { id: 4, textTop: "이탈리아의 아침을", textBottom: "담은 샐러드", align: "right" },
  { id: 7, textTop: "에펠탑 앞에서", textBottom: "파리 바게트", align: "right" },
  { id: 6, textTop: "베를린의 아침", textBottom: "그 분위기 그대로", align: "left" },
  { id: 2, textTop: "이탈리아의 색감을", textBottom: "닮은 바질 파스타", align: "left" },
];

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
        console.log(response.data);
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
      {EsqueTVOrder.map((packageData, index) => {
        return (
          <ShopProductList
            packageData={packageDataList[packageData.id]}
            currentScene={currentScene}
            textTop={EsqueTVOrder[index].textTop}
            textBottom={EsqueTVOrder[index].textBottom}
            align={EsqueTVOrder[index].align}
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
