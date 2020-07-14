import React from "react";
import styled from "styled-components";

import AskHeader from "@src/components/organisms/Header/AskHeader";
import AskFooter from "@src/components/organisms/Footer/AskFooter";

export default function askPage() {
  return (
    <Wrapper>
      <AskHeader />
      <Title>문의 작성하기</Title>
      <Detail>답변은 입력해주신 이메일을 통해 드리겠습니다.</Detail>
      <InputBoxes>
        <Email placeholder="이메일 주소" />
        <AskTitle placeholder="제목" />
        <AskContent placeholder="문의 내용" />
      </InputBoxes>
      <AskFooter />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const Title = styled.p`
  margin-top: 7.2rem;
  margin-left: 1.9rem;
  margin-bottom: 0.2rem;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
`;
const Detail = styled.p`
  margin-left: 1.9rem;
  height: 3rem;
  font-style: normal;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2.1rem;
  letter-spacing: -0.02em;
`;

const InputBoxes = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.7rem;
  line-height: 2.5rem;
  letter-spacing: -0.02em;
  color: black;
`;

const Email = styled.textarea`
  background: #f4f4f4;
  border: none;
  resize: none;
  width: 100%;
  border-radius: 0.5rem;
  height: 3.7rem;
  padding: 0.5rem 1.2rem;
  ::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 1.7rem;
    line-height: 2.5rem;
    letter-spacing: -0.02em;
    color: #bababa;
  }
`;

const AskTitle = styled.textarea`
  background: #f4f4f4;
  border: none;
  resize: none;
  width: 100%;
  border-radius: 0.5rem;
  margin-top: 1.2rem;
  height: 3.7rem;
  padding: 0.5rem 1.2rem;
  ::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 1.7rem;
    line-height: 2.5rem;
    letter-spacing: -0.02em;
    color: #bababa;
  }
`;

const AskContent = styled.textarea`
  background: #f4f4f4;
  resize: none;
  border: none;
  width: 100%;
  border-radius: 0.5rem;
  margin-top: 1.2rem;
  height: 26.7rem;
  padding: 0.9rem 1.2rem 2rem 1.2rem;
  ::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 1.7rem;
    line-height: 2.5rem;
    letter-spacing: -0.02em;
    color: #bababa;
  }
`;
