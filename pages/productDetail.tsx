import React, { useState } from "react";
import styled from "styled-components";
import ProductDetailHeader from "@src/components/organisms/Header/ProductDetailHeader";

export default function productDetail(props) {
  const [isHeart, setIsHeart] = useState(false);

  const onClickHeartButton = () => {
    setIsHeart(!isHeart);
  };

  const onClickTasteButton = () => {};
  return (
    <Wrapper>
      <ProductDetailHeader />
      <ProductPhoto />
      <TitleInformation>
        <TitleShare>
          <TitleArea>
            <Brand>돈타파스 23종</Brand>
            <Title>DontPass</Title>
          </TitleArea>
          <ShareButton src="./image/share_button.png" />
        </TitleShare>
        <PriceArea>
          <PlusMinus>±</PlusMinus>
          <Price>4000 원</Price>
          <PriceDesc>(최소 수량 주문 금액)</PriceDesc>
        </PriceArea>
      </TitleInformation>
      <Bar />
      <ButtonArea>
        <HeartButtonArea onClick={onClickHeartButton}>
          {!isHeart && <HeartButton src="./image/empty_square_heart.png" />}
          {isHeart && <HeartButton src="./image/empty_square_heart_filled.png" />}
        </HeartButtonArea>
        <div onClick={onClickTasteButton}>
          <TasteButton src="./image/taste_button.png" />
        </div>
      </ButtonArea>
      <a href="./about">
        <AboutEsque src="./image/guide_banner.png" />
      </a>
      <Footer src="./image/footer.png" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: white;
  padding-top: 6.2rem;
  height: 100%;
`;

const ProductPhoto = styled.img`
  background: red;
  width: 100%;
  height: 10rem;
`;
const TitleInformation = styled.div`
  padding-left: 2.4rem;
  margin-top: 1.8rem;
`;
const TitleShare = styled.div`
  display: flex;
`;
const TitleArea = styled.div``;

const ShareButton = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 2rem;
  margin-left: auto;
`;

const Brand = styled.p`
  margin-bottom: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 1.9rem;
  letter-spacing: -0.02em;
  color: #2b2b2b;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 1.7rem;
  line-height: 2.7rem;
  letter-spacing: -0.02em;
  color: #2b2b2b;
`;

const PriceArea = styled.div`
  display: flex;
  margin-top: 1.7rem;
  margin-bottom: 2.9rem;
`;

const Price = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.02em;
  color: #2b2b2b;
  margin-bottom: 0;
`;

const PriceDesc = styled.p`
  margin-left: 0.5rem;
  margin-top: auto;
  margin-bottom: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2.1rem;
  letter-spacing: -0.02em;
  color: #8c8c8c;
`;

const PlusMinus = styled.div`
  margin-top: auto;
  margin-right: 0.7rem;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2.1rem;
  letter-spacing: -0.02em;
  color: #2b2b2b;
`;

const Bar = styled.div`
  width: 100%;
  height: 0.1rem;
  background: #e4e4e4;
`;

const HeartButtonArea = styled.div`
  margin-right: 0.5rem;
`;

const AboutEsque = styled.img`
  width: 100%;
`;

const HeartButton = styled.img`
  height: 5rem;
`;

const TasteButton = styled.img`
  height: 5rem;
`;

const ButtonArea = styled.div`
  display: flex;
  width: 100%;
  height: 7rem;
  padding-top: 0.8rem;
  padding-left: 2.1rem;
`;

const Footer = styled.img`
  width: 100%;
`;
