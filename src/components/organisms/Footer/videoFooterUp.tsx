import React, { useEffect } from "react";
import styled from "styled-components";

import VideoProduct from "@src/components/molecules/product/VideoProduct";
import IndexHeader from "@src/components/organisms/Header/IndexHeader";

export default function VideoFooterUp(props) {
  const { setIsFooterUp, videoRef, footerRef, packageData } = props;

  const onClickFooter = () => {
    setIsFooterUp(false);
    videoRef.current.play();
  };

  // 높이를 제기 위하여 추가
  useEffect(() => {
    footerRef.current.clientHeight;
  }, []);

  return (
    <Wrapper ref={footerRef}>
      <IndexHeader />
      <Background />
      <Desc>
        <DescAndButton>
          <DescText onClick={onClickFooter}>
            <DescBig>{packageData.name}</DescBig>
            <DescSmall>{packageData.main_text}</DescSmall>
          </DescText>
          <DownButton src="./image/down.png" />
        </DescAndButton>
        {packageData.products.map((productData) => {
          return <VideoProduct productData={productData} />;
        })}
      </Desc>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
`;
const DescAndButton = styled.div`
  display: flex;
  margin-bottom: 1.9rem;
`;

const DownButton = styled.img`
  margin-top: auto;
  margin-left: auto;
  margin-right: 3.5rem;
  width: 1.8rem;
  height: 1.3rem;
`;
const Background = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #2b2b2b;
  opacity: 0.9;
`;
const Desc = styled.div`
  position: fixed;
  bottom: 2.9rem;
  width: 100%;
`;
const DescText = styled.div`
  padding-left: 2rem;
  width: 32rem;
`;
const DescBig = styled.p`
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 1.2rem;
`;

const DescSmall = styled.p`
  width: 28rem;
  font-style: normal;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2.1rem;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 0;
`;
