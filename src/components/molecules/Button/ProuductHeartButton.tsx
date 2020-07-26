import React, { useState } from "react";
import styled from "styled-components";

export default function ProuductHeartButton(props) {
  const { productID } = props;
  const [isHeart, setIsHeart] = useState(false);

  const heartClick = () => {
    // 좋아요 상품 목록들을 불러온다.
    // 세션 스토리지를 이용
    let myProduct = JSON.parse(sessionStorage.getItem("myProduct"));
    if (!myProduct) {
      myProduct = [];
    }

    if (!isHeart) {
      // 하트 버튼을 누르면 저장
      setIsHeart(true);
      // 만약 이미 좋아요 누른 상품이라면 실행 myProduct에 담지 않는다.
      if (myProduct.includes(productID)) {
        return;
      }
      sessionStorage.setItem("myProduct", JSON.stringify([...myProduct, productID]));
    } else {
      setIsHeart(false);
      // 좋아요 취소를 하면 상품을 찾아서 리스트에서 삭제
      const productIndex = myProduct.indexOf(productID);
      if (productIndex > -1) {
        myProduct.splice(productIndex, 1);
      }
      sessionStorage.setItem("myProduct", JSON.stringify([...myProduct]));
    }
  };

  return (
    <Wrapper onClick={heartClick}>
      {isHeart && <HeartFilled src="./image/filled_heart.png" />}
      {!isHeart && <HeartEmpty src="./image/empty_heart.png" />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 4rem;
  height: 5rem;
  margin-left: auto;
  padding-left: 1.3rem;
  padding-top: 1.9rem;
`;

const HeartFilled = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
const HeartEmpty = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
