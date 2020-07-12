import React, { useState } from "react";
import styled from "styled-components";
import ShopHeader from "@src/components/organisms/Header/ShopHeader";
import ShopProducts from "@src/components/organisms/product/shopProducts";
import Menu from "@src/components/organisms/Menu/menu";
import ShopFooter from "@src/components/organisms/Footer/ShopFooter";

export default function Shop() {
  // 서버사이드렌더링을 하게되면, window가 생성 X, 이 문제를 해결하기 위해
  if (!process.browser) {
    return <div></div>;
  }

  const [isMenu, setIsMenu] = useState(false);
  const [totalScrollHeight, setTotalScrollHeight] = useState(0);

  window.addEventListener("scroll", () => {
    console.log("currentScroll", window.pageYOffset, totalScrollHeight);
  });
  return (
    <Wrapper>
      <ShopHeader isMenu={isMenu} setIsMenu={setIsMenu} />
      <Menu isMenu={isMenu} setIsMenu={setIsMenu} />
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
      <ShopFooter />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
`;
const Dummy = styled.div`
  height: 11.2rem;
`;
