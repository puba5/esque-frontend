import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import ShopProduct from "@src/components/molecules/product/shopProduct";

// Scene의 정보를 담은 객체
const sceneInfo = [
  {
    heightNum: 1.5,
    scrollHeight: 0,
    values: {
      // values에는 변화의 시작 값, 끝 값, 변화의 시작과 끝 시간(비율)
      video_translateY_in: [20, 0, { start: 0.1, end: 0.3 }],
      title_translateY_in: [20, 0, { start: 0.3, end: 0.5 }],
      product_translateY_in: [20, 0, { start: 0.5, end: 0.7 }],
    },
    objs: {
      video: null,
      title: null,
      product: null,
    },
  },
];

export default function ShopProducts(props) {
  const { newRef } = props;
  const shopRef = useRef(null);
  let productCnt = 3;
  const productRef = [];
  for (let i = 0; i < productCnt; i++) {
    productRef.push(useRef(null));
  }

  let currentScrollHeight = 1.4 * window.innerHeight;

  useEffect(() => {
    shopRef.current.style.height = `${currentScrollHeight}px`;
  }, []);

  return (
    <Wrapper ref={shopRef}>
      <Desc>
        담백한 독일식 <br />
        브런치는 어떠세요?
      </Desc>
      <Photo ref={newRef} />
      <div>
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: green solid 4px;
  width: 100%;
  height: 62rem;
`;

const Desc = styled.div`
  position: absolute;
  font-style: normal;
  font-weight: 300;
  font-size: 3rem;
  line-height: 4rem;
  letter-spacing: -0.02em;
  color: #2b2b2b;
`;

const Photo = styled.div`
  padding-left: auto;
  width: 34.3rem;
  height: 41.5rem;
  background: purple;
`;
