import React from "react";
import styled from "styled-components";

import Header from "@src/components/organisms/Header/header";
import Footer from "@src/components/organisms/Footer/footer";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
