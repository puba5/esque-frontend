import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function MyProduct(props) {
  const {
    brandName,
    productName,
    price,
    productImage,
    setMyProduct,
    selectedProductList,
    setSelectedProductList,
    productID,
    isALLChecked,
    setIsALLChecked,
  } = props;

  const [isChecked, setIsChecked] = useState(false);
  const [brandFullName, setBrandFullName] = useState(null);

  useEffect(() => {
    // 브랜드 id로 브랜드 이름을 가져옴
    axios
      .get(`https://esque.store/commerce/brands/${brandName}/get-name/`, {
        params: {},
      })
      .then(function (response) {
        setBrandFullName(response.data);
      })
      .catch(function (error) {});
  }, []);

  // 숫자에 comma 추가
  const addComma = (moneyNumber) => {
    if (moneyNumber === 0) {
      return "0";
    }
    let moneyString = "";
    let cnt = 0;
    while (moneyNumber >= 1) {
      if (cnt !== 0 && cnt % 3 === 0) {
        moneyString = "," + moneyString;
      }
      moneyString = (moneyNumber % 10) + moneyString;
      moneyNumber = Math.floor(moneyNumber / 10);
      cnt++;
    }
    return moneyString;
  };

  // 전체선택을 위하여 isALLChecked의 값이 변하면 체크하도록 구조를 수정
  // 나중에 문제를 해결할 예정
  useEffect(() => {
    if (isALLChecked) {
      setIsChecked(true);
    }
  }, [isALLChecked]);

  const onClickCheckedButton = () => {
    if (isChecked) {
      // 체크가 되있는 상태라면
      setIsChecked(!isChecked);
      // 전체 선택 버튼을 false로 수정
      setIsALLChecked(false);
      let newSelectedProductList = [...selectedProductList];
      const selectedProductIndex = newSelectedProductList.indexOf(productID);
      if (selectedProductIndex > -1) {
        newSelectedProductList.splice(selectedProductIndex, 1);
      }
      setSelectedProductList(newSelectedProductList);
    } else {
      // 체크가 안되어 있는 상태라면
      setIsChecked(!isChecked);
      setSelectedProductList([...selectedProductList, productID]);
    }
  };
  const onClickDeleteButton = () => {
    // X 버튼을 누르면 myProduct 목록에서 삭제
    let myProduct = JSON.parse(sessionStorage.getItem("myProduct"));
    const productIndex = myProduct.indexOf(productID);
    if (productIndex > -1) {
      myProduct.splice(productIndex, 1);
    }
    sessionStorage.setItem("myProduct", JSON.stringify([...myProduct]));
    setMyProduct(myProduct);
  };
  return (
    <Wrapper>
      <HeaderLine />
      <ButtonList>
        <CheckButtonArea onClick={onClickCheckedButton}>
          {!isChecked && <CheckButton src="./image/check_deactivated.png" />}
          {isChecked && <CheckButtonActivated src="./image/check_activated.png" />}
        </CheckButtonArea>
        <ButtonDesc>상품선택</ButtonDesc>
        <CloseButtonArea onClick={onClickDeleteButton}>
          <CloseButton src="./image/X_button.png" />
        </CloseButtonArea>
      </ButtonList>
      <ProductContainer>
        <ProductPhoto src={productImage} />
        <ProductDesc>
          <Brand>{brandFullName}</Brand>
          <ProductName>{productName}</ProductName>
          <Price>
            <PlusMinus>±</PlusMinus>
            {addComma(price)}
          </Price>
        </ProductDesc>
        <Quantity>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Quantity>
      </ProductContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 14.4rem;
  color: black;
  background: white;
`;
const HeaderLine = styled.div`
  height: 0.1rem;
  width: 100%;
  background: #e4e4e4;
`;
const ButtonList = styled.div`
  display: flex;
`;
const CheckButtonArea = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.6rem;
  margin-top: 1.3rem;
  width: 2.4rem;
  height: 2.4rem;
`;
const CheckButton = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

const CheckButtonActivated = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

const ButtonDesc = styled.p`
  margin-left: 0.2rem;
  margin-top: 1.5rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 1.9rem;
  letter-spacing: -0.02em;
`;

const CloseButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 1rem;
  margin-top: 1rem;
  width: 3rem;
  height: 3rem;
`;
const CloseButton = styled.img`
  width: 1rem;
  height: 1rem;
`;

const ProductContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-left: 2rem;
`;

const ProductPhoto = styled.img`
  width: 7.6rem;
  height: 7.6rem;
  background: #f4f4f4;
  margin-right: 1.3rem;
`;

const ProductDesc = styled.div`
  width: 21.3rem;
  height: 7.6rem;
`;

const Brand = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 1.9rem;
  letter-spacing: -0.02em;
`;
const ProductName = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 1.7rem;
  line-height: 2.7rem;
  letter-spacing: -0.02em;
`;
const Price = styled.div`
  display: flex;
  font-style: normal;
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 2.5rem;
  letter-spacing: -0.02em;
`;

const PlusMinus = styled.div`
  margin-top: auto;
  margin-right: 0.7rem;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2.1rem;
  letter-spacing: -0.02em;
  color: black;
`;
const Quantity = styled.select`
  color: black;
  width: 5.3rem;
  height: 2.4rem;
  margin-right: 2rem;
  margin-left: auto;
  margin-top: auto;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  border-radius: 3px;
`;
