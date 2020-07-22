import React from "react";
import styled from "styled-components";

export default function Search() {
  const ClickBackButton = () => {
    console.log("BACK!!!");
    window.history.back();
  };
  return (
    <Wrapper>
      <BackButtonArea onClick={ClickBackButton}>
        <BackButton src="./image/BackButton.png" />
      </BackButtonArea>
      <SearchForm>
        <SearchBox>
          <SearchIcon src="./image/search_icon.png" />
          <SearchInput placeholder="검색어를 입력하세요" />
          <DeleteButton src="./image/roundX.png" />
        </SearchBox>
      </SearchForm>
      <RecentSearch></RecentSearch>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: white;
  height: 100%;
`;
const BackButton = styled.img`
  width: 0.8rem;
`;

const SearchForm = styled.div`
  position: fixed;
  top: 1rem;
  left: 5.3rem;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 31rem;
  height: 3.2rem;
  background: #f4f4f4;
  border-radius: 20px;
`;

const SearchInput = styled.input`
  width: 23.5rem;
  height: 2.5rem;
  border: 1px solid red;
  margin-left: 0.95rem;
  ::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 1.7rem;
    line-height: 2.5rem;
    letter-spacing: -0.02em;
    color: #bababa;
  }
`;

const SearchIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  margin-left: 1.25rem;
`;

const DeleteButton = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  margin-right: 0.4rem;
  margin-left: auto;
`;

const BackButtonArea = styled.a`
  position: fixed;
  left: 0;
  top: 0.7rem;
  padding-left: 1.8rem;
  padding-top: 1.143rem;
  width: 7.1rem;
  height: 4rem;
`;

const RecentSearch = styled.div`
  height: 21.5rem;
  width: 100%;
  border: 1px solid red;
  position: fixed;
  top: 7.3rem;
  margin-left: 2rem;
  margin-right: 1.3rem;
`;
