import React from "react";
import styled from "styled-components";
import MyProduct from "@src/components/molecules/product/MyProduct";
import MyHeader from "@src/components/organisms/Header/MyHeader";
import MyFooter from "@src/components/organisms/Footer/MyFooter";

import axios from "axios";

export default function myPage() {
  // axios
  //   .post("https://www.esque.store/commerce/customers/", {
  //     purchases: [
  //       {
  //         id: 1,
  //         count: 3,
  //         product: 3,
  //         customer: 1,
  //       },
  //       {
  //         id: 2,
  //         count: 100,
  //         product: 5,
  //         customer: 1,
  //       },
  //       {
  //         id: 3,
  //         count: 5,
  //         product: 6,
  //         customer: 1,
  //       },
  //     ],
  //     selected_date: "2020-07-20",
  //     email: "esque@gmail.com",
  //     selected_at: "2020-07-19T11:00:00+09:00",
  //     title: "맛보고 싶어요",
  //     details: "정말 맛있어 보이네요",
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     // always executed
  //   });

  return (
    <Wrapper>
      <MyHeader />
      <ProductControll>
        <ControllButton>
          <SelectText>전체선택(2/3)</SelectText>
          <DeleteButton>삭제</DeleteButton>
        </ControllButton>
      </ProductControll>
      <MyProduct></MyProduct>
      <MyProduct></MyProduct>
      <MyProduct></MyProduct>
      <MyFooter></MyFooter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f4f4f4;
  height: 100%;
`;

const ProductControll = styled.div`
  width: 100%;
  height: 10.8rem;
  padding-top: 6.8rem;
  background: #f4f4f4;
`;
const SelectButton = styled.div``;
const SelectText = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2.1rem;
  letter-spacing: -0.02em;
  color: #2b2b2b;
`;
const ControllButton = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid red;
  margin: 0 auto;
  height: 3.6rem;
  width: 34.8rem;
`;

const DeleteButton = styled.button`
  margin-left: auto;
  border: none;
  width: 6.1rem;
  height: 2.6rem;
  background: #ffffff;
  border-radius: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2.1rem;
  text-align: center;
  letter-spacing: -0.02em;
  color: #2b2b2b;
`;
