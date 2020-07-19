import React from "react";
import styled from "styled-components";
import AboutHeader from "@src/components/organisms/Header/AboutHeader";

export default function About() {
  return (
    <Wrapper>
      <AboutHeader />
      <AboutImage1 src="./image/Info_1.png" />
      <AboutImage2 src="./image/Info_2.png" />
      <AboutImage3 src="./image/Info_3.png" />
      <Footer src="./image/footer.png" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: white;
  height: 100%;
`;

const AboutImage1 = styled.img`
  margin-top: 6.2rem;
  margin-bottom: 4.6rem;
  width: 100%;
`;
const AboutImage2 = styled.img`
  width: 100%;
  margin-bottom: 10.8rem;
`;
const AboutImage3 = styled.img`
  width: 100%;
`;

const Footer = styled.img`
  width: 100%;
`;
