import React from "react";
import styled from "styled-components";
import axios from "axios";

export default function AskFooter(props) {
  const { sendEmail } = props;

  return (
    <Wrapper>
      <HeaderLine />
      <SendButton onClick={sendEmail}>메일보내기</SendButton>
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
