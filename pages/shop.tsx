import React, { useState } from "react";
import styled from "styled-components";
import ShopHeader from "@src/components/organisms/Header/ShopHeader";
import ShopProducts from "@src/components/organisms/product/shopProducts";

export default function Shop() {
  // 서버사이드렌더링을 하게되면, window가 생성 X, 이 문제를 해결하기 위해
  if (!process.browser) {
    return <div></div>;
  }

  const [totalScrollHeight, setTotalScrollHeight] = useState(0);
  let shopCnt = 0;
  // let totalScrollHeight = 0;
  // for (let i = 0; i < shopCnt; i++) {
  //   totalScrollHeight += 5 * window.innerHeight;
  // }

  window.addEventListener("scroll", () => {
    console.log("currentScroll", window.pageYOffset, totalScrollHeight);
  });
  return (
    <Wrapper>
      <ShopHeader />

      <Dummy></Dummy>
      <ShopProducts
        totalScrollHeight={totalScrollHeight}
        setTotalScrollHeight={setTotalScrollHeight}
      />
      <ShopProducts
        totalScrollHeight={totalScrollHeight}
        setTotalScrollHeight={setTotalScrollHeight}
      />
      <ShopProducts
        totalScrollHeight={totalScrollHeight}
        setTotalScrollHeight={setTotalScrollHeight}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Dummy = styled.div`
  height: 11.2rem;
`;
