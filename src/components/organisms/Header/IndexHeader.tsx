import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Hamberger from "@src/components/atoms/btn/hamberger";

export default function IndexHeader(props) {
  const { isMenu, setIsMenu, videoRef, packageData, currentPageNum } = props;

  const VideoBarRef = useRef(null);
  const onClickButton = () => {
    if (isMenu == false) {
      setIsMenu(true);
    }
    videoRef.current.pause();
  };

  useEffect(() => {
    VideoBarRef.current.style.transition = "all 0.2s ease-in-out";
    VideoBarRef.current.style.transform = `translateY(${100 * currentPageNum}%)`;
  }, [currentPageNum]);

  return (
    <Wrapper>
      <Top>
        <EsqueTV>Esque TV</EsqueTV>
        <Shop href="/shop">SHOP</Shop>
        <HambergerButton onClick={onClickButton}>
          <Hamberger size={1} color={"white"} />
        </HambergerButton>
      </Top>
      <VideoBarWrapper>
        <VideoBar />
        <CurrentVideoBar ref={VideoBarRef} />
      </VideoBarWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 16.5rem;
  color: white;
  background-color: #fff;
  padding-top: 0.7rem;
  background: linear-gradient(
    180deg,
    rgba(2, 2, 2, 0.54) 0%,
    rgba(1, 1, 1, 0.306563) 63.54%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const VideoBarWrapper = styled.div`
  position: fixed;
  right: 2rem;
  height: 100%;
  display: flex;
  align-content: center;
`;

const VideoBar = styled.div`
  height: 80%;
  width: 0.1rem;
  background: #ffffff;
  opacity: 0.3;
`;

const CurrentVideoBar = styled.div`
  position: absolute;
  transform: translateY(0%);
  height: 9%;
  width: 0.1rem;
  background: #ffffff;
`;

const Top = styled.div`
  display: flex;
  margin-bottom: 3.4rem;
`;

const EsqueTV = styled.p`
  padding-left: 1.9rem;
  padding-right: 3rem;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  height: auto;
  margin-bottom: 0;
`;

const Shop = styled.a`
  &:active {
    text-decoration: none;
    font-weight: bold;
    color: white;
  }
  &:hover {
    text-decoration: none;
    font-weight: bold;
    color: white;
  }
  font-size: 2rem;
  line-height: 3rem;
  font-style: normal;
  font-weight: normal;
  color: #ffffff;
  opacity: 0.6;
  letter-spacing: -0.02em;
  margin-right: auto;
`;

const HambergerButton = styled.div`
  padding-right: 1.2rem;
`;
