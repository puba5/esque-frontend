import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import IndexHeader from "@src/components/organisms/Header/IndexHeader";
import IndexVideo from "@src/components/organisms/Video/indexVideo";
import Video from "@src/components/organisms/Video/video";
import Menu from "@src/components/organisms/Menu/menu";

import axios from "axios";

export default function Home() {
  if (!process.browser) {
    return <div></div>;
  }

  // 화면의 크기가 모바일보다 크다면 다른 화면으로
  if (window.innerWidth > 500) {
    console.log("NOT MOBILE");
    return <div>모바일 화면으로 접속해주세요</div>;
  }

  const [isMenu, setIsMenu] = useState(false);
  const [currentPageNum, setCurrentPageNum] = useState(0);
  const [isFooterUp, setIsFooterUp] = useState(false);
  const [packageList, setPackageList] = useState([]);

  // 모든 videoComponent에 slideRef 인자를 주기 위하여 slideRef 리스트 생성
  const slideRef = [];
  const videoRef = [];

  useEffect(() => {
    // 패키지 데이터를 가져온다

    axios
      .get("https://esque.store/commerce/packages/", {
        params: {},
      })
      .then(function (response) {
        setPackageList(response.data);
      })
      .catch(function (error) {})
      .finally(function () {
        // always executed
      });
  }, []);
  // 동영상 페이지가 8개라는 것, 나중에 수정 예정
  let totalPageListCnt = 8;

  // 페이지 생성
  const makePages = () => {
    // 페이지 개수만큼 생성
    for (let i = 0; i <= totalPageListCnt; i++) {
      slideRef.push(useRef(null));
      videoRef.push(useRef(null));
    }
  };
  makePages();
  let currentPage = 0;
  let startY = 0;
  let gapY = 0;

  useEffect(() => {
    // 터치 시작
    document.addEventListener(
      "touchstart",
      (event) => {
        // 첫번째 터치의 Y 값을 구한다
        startY = event.touches[0].clientY;
      },
      false
    );

    document.addEventListener(
      "touchend",
      (event) => {
        gapY = event.changedTouches[0].clientY - startY;
        if (gapY < -50) {
          // 슬라이드를 위로 올림
          console.log("UP", currentPage);
          // 맨 마지막 페이지면, 내려가지 않도록
          if (currentPage >= totalPageListCnt) {
            console.log("NoMorePage");
            return;
          }
          // 페에지 바꾸기 전에 비디오를 정지시키고, 새로운 비디오는 비디오를 재생
          videoRef[currentPage].current.pause();
          currentPage++;
          videoRef[currentPage].current.play();
          slideRef[currentPage].current.style.transition = "all 0.5s ease-in-out";
          slideRef[currentPage].current.style.transform = `translateY(0vh)`;
        } else if (gapY > 50) {
          // 슬라이드를 아래로 내림
          console.log("DOWN", currentPage);
          // 맨 첫번째 페이지면, 올라가지 않도록
          if (currentPage <= 0) {
            console.log("NoMorePage");
            return;
          }
          // 페에지 바꾸기 전에 비디오를 정지시키고, 새로운 비디오는 비디오를 재생
          videoRef[currentPage].current.pause();
          slideRef[currentPage].current.style.transition = "all 0.5s ease-in-out";
          slideRef[currentPage].current.style.transform = `translateY(100vh)`;
          currentPage--;
          videoRef[currentPage].current.play();
        }
        setCurrentPageNum(currentPage);
      },
      false
    );
  }, []);

  return (
    <Wrapper>
      {!isFooterUp && (
        <div>
          <IndexHeader isMenu={isMenu} setIsMenu={setIsMenu} videoRef={videoRef[currentPageNum]} />
          {currentPageNum !== 0 && (
            <Bottom>
              <Desc>지금 여기는</Desc>
              <Where>
                <City>{packageList[currentPageNum - 1].city}</City>
                <Country>{packageList[currentPageNum - 1].country}</Country>
              </Where>
            </Bottom>
          )}
        </div>
      )}
      <IndexVideo currentPageNum={currentPageNum} videoRef={videoRef[0]} />
      {packageList.map((packageData, index) => {
        return (
          <Video
            packageData={packageData}
            slideRef={slideRef[index + 1]}
            videoRef={videoRef[index + 1]}
            isFooterUp={isFooterUp}
            setIsFooterUp={setIsFooterUp}
          />
        );
      })}
      <Menu isMenu={isMenu} setIsMenu={setIsMenu} videoRef={videoRef[currentPageNum]} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  overflow: hidden;
`;

const Bottom = styled.div`
  z-index: 100;
  position: fixed;
  top: 8.1rem;
  left: 1.9rem;
  opacity: 1;
`;

const Desc = styled.p`
  margin-bottom: 0;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2.1rem;
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
  font-size: 1.4rem;
  line-height: 2.1rem;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding-top: 0.46rem;
`;
const City = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-top: 0;
  margin-right: 0.5rem;
`;
