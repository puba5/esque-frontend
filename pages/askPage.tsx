import React, { useState } from "react";
import styled from "styled-components";

import AskHeader from "@src/components/organisms/Header/AskHeader";
import AskFooter from "@src/components/organisms/Footer/AskFooter";

import axios from "axios";

export default function askPage() {
  const [email, setEmail] = useState(null);
  const [title, setTitle] = useState(null);
  const [details, setDetails] = useState(null);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeDetails = (event) => {
    setDetails(event.target.value);
  };

  const sendEmail = () => {
    let timeNow = new Date();
    console.log(email, title, timeNow, details);
    axios
      .post("https://esque.store/commerce/customers/", {
        email: email,
        selected_at: timeNow,
        title: title,
        details: details,
      })
      .then(function (response) {
        console.log(response.data);
        alert("이메일이 잘 전송되었습니다.");
      })
      .catch(function (error) {
        alert("오류 발생!");
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  const sendAutoEmail = (id) => {
    axios
      .get(`https://esque.store/commerce/customers/${id}/mail`, {})
      .then(function (response) {
        console.log(response.data);
        console.log("자동전송완료");
      })
      .catch(function (error) {
        alert("자동전송오류발생!");
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <Wrapper>
      <AskHeader />
      <Title>문의 작성하기</Title>
      <Detail>답변은 입력해주신 이메일을 통해 드리겠습니다.</Detail>
      <InputBoxes>
        <Email placeholder="이메일 주소" value={email} onChange={onChangeEmail} />
        <AskTitle placeholder="제목" value={title} onChange={onChangeTitle} />
        <AskContent placeholder="문의 내용" value={details} onChange={onChangeDetails} />
      </InputBoxes>
      <AskFooter sendEmail={sendEmail} />
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
  border-radius: 5px;
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
  border-radius: 5px;
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
  border-radius: 5px;
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
