import React from "react";
import styled from "styled-components";
import axios from "axios";

export default function AskFooter() {
  const SendEmail = () => {
    console.log("SEND EMAIL!!");
    SendInformation();
  };

  const SendInformation = () => {
    axios
      .post("https://www.esque.store/commerce/customers/", {
        selected_date: "2020-07-20",
        email: "hiroo@gmail.com",
        selected_at: "2020-07-19T11:00:00+09:00",
        title: "맛보고 싶어요",
        details: "정말 맛있어 보이네요",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <Wrapper>
      <HeaderLine />
      <SendButton onClick={SendEmail}>메일보내기</SendButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  height: 7rem;
`;
const HeaderLine = styled.div`
  height: 0.1rem;
  width: 100%;
  background: #e4e4e4;
`;

const SendButton = styled.button`
  text-decoration: none;
  width: 33.5rem;
  height: 5rem;
  background: #2b2b2b;
  border-radius: 5px;
  margin: 0.8rem 2rem 1.2rem 2rem;

  font-style: normal;
  font-weight: normal;
  font-size: 1.7rem;
  line-height: 2.5rem;
  text-align: center;
  letter-spacing: -0.02em;
  color: #fcfcfc;
`;
