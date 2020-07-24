import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import ShopProduct from "@src/components/molecules/product/shopProduct";

// Scene의 정보를 담은 객체
const sceneInfo = {
  heightNum: 1.5,
  scrollHeight: 0,
  values: {
    // values에는 변화의 시작 값, 끝 값, 변화의 시작과 끝 시간(비율)
    title_translateY_in: [10, 0, { start: 0, end: 0.2 }],
    video_translateY_in: [10, 0, { start: 0.2, end: 0.4 }],
    product_translateY_in: [10, -10, { start: 0.3, end: 0.5 }],
  },
  objs: {
    video: null,
    title: null,
    product: null,
  },
};

export default function ShopProductList(props) {
  const {
    currentScene,
    sceneNumber,
    yOffset,
    componentHeightList,
    setComponentHeightList,
    packageData,
    textTop,
    textBottom,
    align,
  } = props;
  const shopRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const productRef = useRef(null);

  const [currentHeight, setCurrentHeight] = useState(0);
  const [prevSrollHeight, setPrevScrollHeight] = useState(0);

  // 컴포넌트 현재의 높이를 구하기 위하여, 이전 컴포넌트들의 높이를 구해놓는다.
  useEffect(() => {
    let heightSum = 0;
    for (let i = 0; i < sceneNumber; i++) {
      heightSum += componentHeightList[i];
    }
    setPrevScrollHeight(heightSum);
  }, [componentHeightList]);

  // 화면 비율을 구하여 알맞은 값을 계산
  function calcValues(values, currentYOffset) {
    let retValues;
    // 현재 씬에서 스크롤된 범위로 구하기
    const scrollHeight = currentHeight;

    let scrollRatio = currentYOffset / currentHeight;

    // 빠르게 변화해서 비율이 0보다 작아진다면, 0으로 취급
    if (scrollRatio <= 0) {
      scrollRatio = 0;
    }
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

  function playAnimation() {
    let values = sceneInfo.values;
    // 현재 높이를 window.pageYOffset + 0.5 * componentHeightList[0]로 구함
    let currentYOffset = window.pageYOffset + 0.5 * componentHeightList[0] - prevSrollHeight;
    // let currentYOffset = yOffset - prev;

    // 해당하는 컴포넌트가 아니면 skip

    if (sceneNumber !== currentScene) {
      return;
    }
    // 조건을 넣어 해당 조건에는 애니메이션이 작동하지 않도록
    if (currentYOffset < 0) return;
    if (currentYOffset >= componentHeightList[currentScene]) return;

    titleRef.current.style.transform = `translateY(${calcValues(
      values.title_translateY_in,
      currentYOffset
    )}rem )`;

    videoRef.current.style.transform = `translateY(${calcValues(
      values.video_translateY_in,
      currentYOffset
    )}rem)`;

    productRef.current.style.transform = `translateY(${calcValues(
      values.product_translateY_in,
      currentYOffset
    )}rem )`;
  }
  const photoRef = useRef(null);

  // useEffect(() => {
  //   // 비동기적으로 useState가 저장되는 문제를 해결하기 위하여 함수형으로 useState를 사용
  //   setComponentHeightList((prevState) => {
  //     let newHeightList = { ...prevState };
  //     newHeightList[sceneNumber] = shopRef.current.clientHeight;
  //     return newHeightList;
  //   });
  //   console.log(componentHeightList);
  //   setCurrentHeight(shopRef.current.clientHeight);
  // }, []);

  // 다른 컴포넌트들의 높이는 정해져 있어서 높이 값을 받아올 수 있다.
  // 하지만 사진의 높이는 정해지지 않았고, 마지막에 로딩되므로, 컴포넌트의 높이를 사진이 로딩된 이후 결정한다
  const initializeHeight = () => {
    // 비동기적으로 useState가 저장되는 문제를 해결하기 위하여 함수형으로 useState를 사용
    setComponentHeightList((prevState) => {
      let newHeightList = { ...prevState };
      newHeightList[sceneNumber] = shopRef.current.clientHeight;
      return newHeightList;
    });
    setCurrentHeight(shopRef.current.clientHeight);
  };

  useEffect(() => {
    playAnimation();
  });

  return (
    <Wrapper ref={shopRef}>
      {align === "right" && (
        <DescRight ref={titleRef}>
          {/* {packageData.name} */}
          <div>
            <TextTopRight>{textTop}</TextTopRight>
            <TextBottomRight> {textBottom}</TextBottomRight>
          </div>
        </DescRight>
      )}
      {align === "left" && (
        <Desc ref={titleRef}>
          {/* {packageData.name} */}
          <div>
            <TextTop>{textTop}</TextTop>
            <TextBottom> {textBottom}</TextBottom>
          </div>
        </Desc>
      )}

      <Photo ref={videoRef} src={packageData.shop_image} onLoad={initializeHeight} />
      <ProductList ref={productRef}>
        {packageData.products.map((product, i) => {
          return (
            <ShopProduct
              brandName={product.brand}
              productName={product.name}
              price={product.price}
              productImage={product.main_image}
              productID={product.id}
            />
          );
        })}
      </ProductList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 10rem;
  width: 100%;
`;

const TextTop = styled.p`
  margin-left: auto;
  margin-right: 0;
  margin-bottom: 0;
`;
const TextBottom = styled.p``;

const Desc = styled.div`
  padding-left: 2rem;
  white-space: pre-line;
  z-index: 1;
  position: absolute;
  font-style: normal;
  font-weight: 300;
  font-size: 3rem;
  line-height: 4rem;
  letter-spacing: -0.02em;
  color: #2b2b2b;
  transform: translateY(10rem);
`;

const TextTopRight = styled.p`
  margin-left: auto;
  margin-right: 0;
  margin-bottom: 0;
`;
const TextBottomRight = styled.p``;

const DescRight = styled.div`
  text-align: right;
  right: 2rem;
  white-space: pre-line;
  z-index: 1;
  position: absolute;
  font-style: normal;
  font-weight: 300;
  font-size: 3rem;
  line-height: 4rem;
  letter-spacing: -0.02em;
  color: #2b2b2b;
  transform: translateY(10rem);
`;

const ProductList = styled.div`
  transform: translateY(10rem);
  background: white;
`;

const Photo = styled.img`
  padding-left: auto;
  width: 100%;
  /* height: 30.5rem; */

  transform: translateY(10rem);
`;
