import React from "react";
import Venues from "../organism/Venues";
import SearchBox from "../organism/SearchBox";

const Main = () => {
  return (
    <main className="l-main">
      <h1>面接会場検索</h1>
      <SearchBox />
      <Venues />
    </main>
  );
};

export default Main;
