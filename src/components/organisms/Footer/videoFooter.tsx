import React, { useEffect } from "react";
import styled from "styled-components";

export default function VideoFooter(props) {
  const { setIsFooterUp, videoRef, footerRef, packageData } = props;

  const onClickFooter = () => {
    setIsFooterUp(true);
    videoRef.current.pause();
  };

  // 높이를 제기 위하여 추가
  useEffect(() => {
    footerRef.current.clientHeight;
  }, []);

  return (
    <Wrapper ref={footerRef} onClick={onClickFooter}>
      <Background />
      <Desc>
        <DescBig>{packageData.name}</DescBig>
        <DescSmall>{packageData.main_text.substr(0, 52) + "..."}</DescSmall>
      </Desc>
      <UpButton src="./image/up.png" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const UpButton = styled.img`
  position: fixed;
  right: 3.5rem;
  bottom: 3.4rem;
  width: 1.8rem;
  height: 1.3rem;
`;
const Desc = styled.div`
  position: fixed;
  width: 28rem;
  bottom: 3.2rem;
  left: 2rem;
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

const Background = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 31.8rem;
  transform: rotate(180deg);
  bottom: 0;
  background: linear-gradient(
    179.66deg,
    rgba(2, 2, 2, 0.54) 0.35%,
    rgba(1, 1, 1, 0.30375) 72.24%,
    rgba(0, 0, 0, 0) 99.65%
  );
`;
