import React, { useRef } from "react";
import styled from "styled-components";

import VideoFooter from "@src/components/organisms/Footer/videoFooter";
import VideoFooterUp from "@src/components/organisms/Footer/videoFooterUp";
import IndexHeaderBlurred from "@src/components/organisms/Header/IndexHeaderBlurred";

export default function Video(props) {
  const { videoRef, slideRef, isFooterUp, setIsFooterUp, packageData } = props;

  const videoFooter = useRef(null);
  const videoFooterUp = useRef(null);
  console.log(packageData);

  return (
    <Wrapper ref={slideRef}>
      {isFooterUp && <IndexHeaderBlurred />}
      {/* {!isFooterUp && (
        <Bottom>
          <Desc>지금 여기는</Desc>
          <Where>
            <City>{packageData.city}</City>
            <Country>{packageData.country}</Country>
          </Where>
        </Bottom>
      )} */}
      {/* <img src={packageData.tv_image} width="100%" /> */}

      <video
        ref={videoRef}
        width="100%"
        poster={packageData.tv_image}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={packageData.tv_video} type="video/mp4" />
      </video>
      {!isFooterUp && (
        <VideoFooter
          packageData={packageData}
          footerRef={videoFooter}
          videoRef={videoRef}
          setIsFooterUp={setIsFooterUp}
        />
      )}
      {isFooterUp && (
        <VideoFooterUp
          footerRef={videoFooterUp}
          videoRef={videoRef}
          setIsFooterUp={setIsFooterUp}
          packageData={packageData}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  transform: translate3d(0, 100vh, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bottom = styled.div`
  z-index: 101;
  position: fixed;
  top: 8.1rem;
  left: 1.9rem;
  opacity: 1;
`;

const Desc = styled.p`
  margin-bottom: 0;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

const Where = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: bottom;
`;

const Country = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding-top: 0.46rem;
`;
const City = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-top: 0;
  margin-right: 0.5rem;
`;
