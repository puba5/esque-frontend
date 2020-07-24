import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductDetailHeader from "@src/components/organisms/Header/ProductDetailHeader";
import { useRouter } from "next/router";

import axios from "axios";

const LocalProductInformation = [
  {
    id: 1,
    headText: "베를리너가 선별한 최고의 원두샘플",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F1_1sample.png?alt=media&token=c2c2745f-c2c1-4564-b167-0f318d661b23",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F1_detail.png?alt=media&token=bb08b973-dab9-442f-ab82-df04c8aee1f9",
  },
  {
    id: 2,
    headText: "베를린의 분위기가 가득 담긴 원두세트",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F1_2home.png?alt=media&token=cc7495d1-5d4b-4dd8-a075-61b7800033d1",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F1_detail.png?alt=media&token=bb08b973-dab9-442f-ab82-df04c8aee1f9",
  },
  {
    id: 3,
    headText: "마카롱이 시작된 곳, 파리를 맛보다",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F2_1macarons.png?alt=media&token=72c98c18-bd60-4404-a3d4-339ac19d0c62",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F2__detail.png?alt=media&token=258c7cbc-a64a-4e34-805d-828873f93166",
  },
  {
    id: 4,
    headText: "이탈리아 밀로만든 탱탱한 식감의 파르팔레",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F3_1pasta.png?alt=media&token=45ded086-468e-4896-9ea6-5f01e11ff3e1",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F3_detail.png?alt=media&token=7975afd5-f886-412d-8e36-022b8d76786d",
  },
  {
    id: 5,
    headText: "쌉쌀한 바질향 가득한 바질페스토",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F3_2basil.png?alt=media&token=78709afa-224a-4c6f-98a5-39c2aded9423",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F3_detail.png?alt=media&token=7975afd5-f886-412d-8e36-022b8d76786d",
  },
  {
    id: 6,
    headText: "티타임에 딱, 버터향 가득 영국식 비스켓",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F4_1bread.png?alt=media&token=6c09f6e6-9d5c-423a-984e-0904fe44a2a5",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F4_detail.png?alt=media&token=9c19961b-3638-47d8-9d56-62afaf6d1c1f",
  },
  {
    id: 7,
    headText: "티타임의 본고장에서 만든 달콤한 마멀레이드",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F4_2jam.png?alt=media&token=b8356a43-cf36-4e70-9fe9-8bcacdf6efc5",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F4_detail.png?alt=media&token=9c19961b-3638-47d8-9d56-62afaf6d1c1f",
  },
  {
    id: 8,
    headText: "영국 왕실이 사랑한 담백한 크림",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F4_3cream.png?alt=media&token=f56132d3-b7ce-4d01-9770-0c734f2d81db",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F4_detail.png?alt=media&token=9c19961b-3638-47d8-9d56-62afaf6d1c1f",
  },
  {
    id: 9,
    headText: "지중해의 싱싱함이 가득담긴 부라타치즈",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F5_1burata.png?alt=media&token=5e1e4131-f28e-4071-844e-e6318bab8b3c",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F5_detail.png?alt=media&token=c228b1c3-febe-4541-833f-f3eee965af41",
  },
  {
    id: 10,
    headText: "이탈리아 포도향이 가득담긴 발사믹식초",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F5_2balsamic.png?alt=media&token=7c40e84c-67e1-4385-861d-ad12858c036a",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F5_detail.png?alt=media&token=c228b1c3-febe-4541-833f-f3eee965af41     ",
  },
  {
    id: 11,
    headText: "쫄깃한 식감이 가득한 대왕오징어",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F6_1squid.png?alt=media&token=55704571-9e3d-44c0-9352-917475d0a2dc",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F6_detail.png?alt=media&token=23ad756a-6b85-4ca6-836d-6eb97a225b05",
  },
  {
    id: 12,
    headText: "스페인 바다향 듬뿍, 정어리 통조림",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F6_2fish.png?alt=media&token=8a398c33-e168-4288-923f-2d3080281628",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F6_detail.png?alt=media&token=23ad756a-6b85-4ca6-836d-6eb97a225b05",
  },
  {
    id: 13,
    headText: "스페인 향이 듬뿍 담긴 참치 통조림",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F6_3tuna.png?alt=media&token=063e601d-0926-437b-8b07-971cf9193f29",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F6_detail.png?alt=media&token=23ad756a-6b85-4ca6-836d-6eb97a225b05",
  },
  {
    id: 14,
    headText: "건강 듬뿍 독일식 전통 요거트",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F7_1yogurt.png?alt=media&token=c8731a24-621f-49b0-bd14-9fe4c40d19be",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F7_detail.png?alt=media&token=bb61e22d-7d09-4a98-8bba-8af63dde72c5",
  },
  {
    id: 15,
    headText: "베를리너들이 즐기는 영양가득 뮤즐리",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F7_2muesli.png?alt=media&token=a3162d4b-f99e-4d21-b870-e87bdb669c2c",
    detailImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F7_detail.png?alt=media&token=bb61e22d-7d09-4a98-8bba-8af63dde72c5",
  },
  {
    id: 16,
    headText: "쫀쫀하고 고소한 진짜 파리 바게트",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F8_1baguette.png?alt=media&token=5b3a7156-e89a-4ecc-b431-f72828ce6e70",
    detailImage: "",
  },
  {
    id: 17,
    headText: "파리지엥 픽, 버터향 가득 크루아상",
    productImage:
      "https://firebasestorage.googleapis.com/v0/b/esque1.appspot.com/o/products%2F8_2croissant.png?alt=media&token=92aa88e4-4436-4da8-9ef6-df0b82f97ea3",
    detailImage: "",
  },
];

export default function productDetail(props) {
  const router = useRouter();
  const { productID } = router.query;
  const [isHeart, setIsHeart] = useState(false);
  const [brandFullName, setBrandFullName] = useState("");
  const [productData, setProductData] = useState({
    headText: "",
    productImage: "",
    detailImage: "",
  });
  const [productInfo, setProductInfo] = useState({ name: "", price: "", description: "" });

  const onClickHeartButton = () => {
    setIsHeart(!isHeart);
  };

  const getProductData = (productID) => {
    axios
      .get(`https://esque.store/commerce/products/${productID}/`, {
        params: {},
      })
      .then(function (response) {
        console.log(response.data);
        setProductInfo(response.data);
        GetBrandName(response.data.brand);
      })
      .catch(function (error) {})
      .finally(function () {
        // always executed
      });
  };

  const GetBrandName = (brandName) => {
    axios
      .get(`https://esque.store/commerce/brands/${brandName}/get-name/`, {
        params: {},
      })
      .then(function (response) {
        setBrandFullName(response.data);
      })
      .catch(function (error) {})
      .finally(function () {
        // always executed
      });
  };

  useEffect(() => {
    if (productID) {
      setProductData(LocalProductInformation[Number(productID) - 1]);
      getProductData(productID);
    }
  }, [productID]);

  const onClickTasteButton = () => {};
  return (
    <Wrapper>
      <ProductDetailHeader />
      <ProductPhoto src={productData.productImage} />
      <TitleInformation>
        <TitleShare>
          <TitleArea>
            <Brand>{brandFullName}</Brand>
            <Title>{productInfo.name}</Title>
          </TitleArea>
          <ShareButton src="./image/share_button.png" />
        </TitleShare>
        <PriceArea>
          <PlusMinus>±</PlusMinus>
          <Price>{productInfo.price} 원</Price>
          <PriceDesc>(최소 수량 주문 금액)</PriceDesc>
        </PriceArea>
      </TitleInformation>
      <Bar />
      <HeadText>
        <p>{productData.headText}</p>
      </HeadText>
      <DetailText>
        <p>{productInfo.description}</p>
      </DetailText>

      <a href="./about">
        <AboutEsque src="./image/guide_banner.png" />
      </a>
      <ProductPhoto src={productData.detailImage} />

      <ButtonArea>
        <HeartButtonArea onClick={onClickHeartButton}>
          {!isHeart && <HeartButton src="./image/empty_square_heart.png" />}
          {isHeart && <HeartButton src="./image/empty_square_heart_filled.png" />}
        </HeartButtonArea>
        <div onClick={onClickTasteButton}>
          <TasteButton src="./image/taste_button.png" />
        </div>
      </ButtonArea>

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
  width: 100%;
`;
const TitleInformation = styled.div`
  padding-left: 2.4rem;
  margin-top: 1.8rem;
`;
const HeadText = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.7rem;
  text-align: center;
  letter-spacing: -0.02em;
  color: #2b2b2b;
`;
const DetailText = styled.div`
  width: 100%;
  padding-left: 1.9rem;
  padding-right: 2.1rem;
  margin-bottom: 6.7rem;
  font-style: normal;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 2.7rem;
  /* or 180% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;

  color: #000000;
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
  margin-bottom: 0rem;
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
  margin-bottom: 4.8rem;
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
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 7rem;
  padding-top: 0.8rem;
  padding-left: 2.1rem;
  background: white;
`;

const Footer = styled.img`
  width: 100%;
`;
