import React, { useState } from "react";
import styled from "styled-components";

import HeartIcon from "../../asset/icons/heart";

export default function PostCardFooter({ likeCount }) {
  const [isLiked, setIsLiked] = useState(false);
  const handleClick = () => {
    setIsLiked(!isLiked);
  };
  // 3항 연산자를 사용하여 return이 객체 그대로 된다는 것을 이용하여 코드를 좀더 간결하게 쓸 수 있다
  const [likeNum, fillIn, fillOut] =
    isLiked === true ? [likeCount + 1, "red", "red"] : [likeCount, "white", "black"];

  return (
    <Wrapper>
      <LikeButton onClick={handleClick}>
        <HeartIcon style={{ width: "2.3rem", height: "2.1rem" }} {...{ fillIn, fillOut }} />
      </LikeButton>
      <LikeCount>{likeNum}</LikeCount>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 1rem;
`;

const LikeButton = styled.button`
  width: fit-content;
  height: fit-content;
  margin-left: auto;
  margin-right: 0.4rem;
  background-color: Transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const LikeCount = styled.p`
  margin: 0rem;
  font-size: 1.2rem;
  width: 3rem;
`;
