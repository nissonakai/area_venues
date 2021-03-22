import React from "react";
import Venues from "../organism/Venues";
import SearchBox from "../organism/SearchBox";
import CloseButton from "../atoms/CloseButton";

const Main = () => {
  return (
    <main className="l-main">
      <h1>登録会場検索</h1>
      <SearchBox />
      <Venues />
      <CloseButton />
    </main>
  );
};

export default Main;
