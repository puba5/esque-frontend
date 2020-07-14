import React from "react";
import styled from "styled-components";

import AskHeader from "@src/components/organisms/Header/AskHeader";
import AskFooter from "@src/components/organisms/Footer/AskFooter";

export default function askPage() {
  return (
    <Wrapper>
      <AskHeader />
      <ProductControll></ProductControll>

      <AskFooter />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;

const ProductControll = styled.div`
  width: 100%;
  height: 10.8rem;
`;
