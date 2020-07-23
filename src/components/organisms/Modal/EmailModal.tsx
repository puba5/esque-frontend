import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function EmailModal(props) {
  const { selectedProductList, ModalRef, setIsModal } = props;

  const [email, setEmail] = useState(null);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  console.log(selectedProductList);
  // 맛보고 싶어요 버튼
  const sendEmail = () => {
    let timeNow = new Date();
    let details = "맛보고 싶어요 메일로 보낸 음식은";
    selectedProductList.map((selectedProduct) => {
      console.log("sele", selectedProduct);
      details += selectedProduct + "번 상품과, ";
    });
    axios
      .post("https://esque.store/commerce/customers/", {
        email: email,
        selected_at: timeNow,
        title: "맛보고싶어요를 신청하셨습니다.",
        details: details,
      })
      .then(function (response) {
        console.log(response.data);
        alert("이메일이 잘 전송되었습니다.");
        getLastEmail(email);
      })
      .catch(function (error) {
        alert("오류 발생!");
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  const getLastEmail = (email) => {
    axios
      .get(`https://esque.store/commerce/customers/?search=${email}`, {})
      .then(function (response) {
        console.log("사용자", response.data);
        console.log("ID", response.data[response.data.length - 1].id);
        sendAutoEmail(response.data[response.data.length - 1].id);
        console.log("이메일 마지막 사용자 가져옴");
      })
      .catch(function (error) {
        alert("사용자 못가져옴!!");
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  const sendAutoEmail = (id) => {
    axios
      .get(`https://esque.store/commerce/customers/${id}/mail/`, {})
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
  // 모달을 닫는 버튼
  const onClickCloseModal = () => {
    setIsModal(false);
    ModalRef.current.style.transition = "all 0.7s ease-in-out";
    ModalRef.current.style.transform = `translateY(100vh)`;
  };

  return (
    <Wrapper ref={ModalRef}>
      <XbuttonArea onClick={onClickCloseModal}>
        <Xbutton src="./image/X_button.png" />
      </XbuttonArea>
      <FooterContent>
        <TitleText>맛보고 싶어요 신청</TitleText>
        <DetailText>수요 확인 후 이메일을 통해 안내 드리겠습니다.</DetailText>
        <Email placeholder="이메일 주소를 입력해주세요." value={email} onChange={onChangeEmail} />
        <EmailDetail>**전송 후에는 수정이 불가하므로 다시 한번 확인해 주세요.</EmailDetail>
      </FooterContent>
      <HeaderLine />
      <ButtonWrapper>
        <MailSendButton onClick={sendEmail}>
          <p>메일 보내기</p>
        </MailSendButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  transform: translateY(100vh);
  z-index: 300;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 25.6rem;
  background: #ffffff;
  border-radius: 20px 20px 0px 0px;
`;
const XbuttonArea = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 21.8rem;
  right: 1.1rem;
  width: 3rem;
  height: 3rem;
`;

const Xbutton = styled.img`
  width: 1rem;
  height: 1rem;
`;
const HeaderLine = styled.div`
  height: 0.1rem;
  width: 100%;
  background: #e4e4e4;
`;

const FooterContent = styled.div`
  padding-top: 1.1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-bottom: 4.6rem;
`;

const Email = styled.textarea`
  font-style: normal;
  font-weight: normal;
  font-size: 1.7rem;
  line-height: 2.5rem;
  letter-spacing: -0.02em;
  color: black;
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
const TitleText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  color: #2b2b2b;
  margin-bottom: 0;
`;

const DetailText = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2.1rem;
  letter-spacing: -0.02em;
  margin-bottom: 2.1rem;
  color: #2b2b2b;
`;

const EmailDetail = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.9rem;
  letter-spacing: -0.02em;
  color: #8c8c8c;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  padding-right: 2rem;
  padding-left: 2rem;
  margin-bottom: 1.2rem;
  margin-top: 0.8rem;
`;
const MailSendButton = styled.button`
  width: 100%;
  height: 5rem;
  border: none;
  background: #2b2b2b;
  border-radius: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 1.7rem;
  line-height: 2.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: -0.02em;
  color: #fcfcfc;
  font-style: normal;
`;
