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
    product_translateY_in: [10, 0, { start: 0.3, end: 0.5 }],
  },
  objs: {
    video: null,
    title: null,
    product: null,
  },
};

export default function ShopProducts(props) {
  const {
    currentScene,
    sceneNumber,
    yOffset,
    componentHeightList,
    setComponentHeightList,
    prev,
    enterNewScene,
    productData,
  } = props;
  const shopRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const productRef = useRef(null);

  const [currentHeight, setCurrentHeight] = useState(0);
  // 한 컴포넌트의 높이
  // let componentHeight = 1 * shopRef.current.clientHeight;
  // 현재 컴포넌트 전까지의 높이
  // let prevScrollHeight = 0;
  // for (let i = 0; i < currentScene; i++) {
  //   prevScrollHeight += componentHeightList[0];
  // }

  // 화면 비율을 구하여 알맞은 값을 계산
  function calcValues(values, currentYOffset) {
    let retValues;
    // 현재 씬에서 스크롤된 범위로 구하기
    const scrollHeight = currentHeight;
    //const scrollRatio = currentYOffset / scrollHeight;
    const scrollRatio = currentYOffset / currentHeight;
    //.log("ratio", scrollHeight, scrollRatio);

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
    let currentYOffset = yOffset - prev;
    //prevScrollHeight;

    // 해당하는 컴포넌트가 아니면 skip

    console.log(enterNewScene);
    // 조건을 넣어 해당 조건에는 애니메이션이 작동하지 않도록
    if (currentYOffset < 0) return;
    if (currentYOffset > 729) return;
    if (enterNewScene) return;
    if (sceneNumber !== currentScene) {
      return;
    }

    console.log("curr", currentYOffset, yOffset, prev, sceneNumber, currentScene);
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

  useEffect(() => {
    setComponentHeightList((componentHeightList[sceneNumber] = shopRef.current.clientHeight));
    setCurrentHeight(shopRef.current.clientHeight);
  }, []);

  useEffect(() => {
    playAnimation();
  });

  return (
    <Wrapper ref={shopRef}>
      <Desc ref={titleRef}>
        담백한 독일식 <br />
        브런치는 어떠세요?
      </Desc>
      <Photo
        ref={videoRef}
        src="https://firebasestorage.googleapis.com/v0/b/esque-66147.appspot.com/o/products%2F%5B%EC%83%81%ED%92%88%EC%9D%B4%EB%AF%B8%EC%A7%802%5DMy%20Musesli%20Mix%20%EC%84%B8%ED%8A%B8.png?alt=media&token=be68def"
      />
      <ProductList ref={productRef}>
        {productData.map((product, i) => {
          return (
            <ShopProduct
              brandName={product.brand}
              productName={product.name}
              price={product.price}
              productImage={product.main_image}
            />
          );
        })}
      </ProductList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 10rem;
  border: green solid 4px;
  width: 100%;
`;

const Desc = styled.div`
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
`;

const Photo = styled.img`
  padding-left: auto;
  width: 34.3rem;
  height: 30.5rem;
  background: yellow;
  transform: translateY(10rem);
`;
