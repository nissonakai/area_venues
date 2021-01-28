import React from "react";
import useAreaData from "../../logic/useAreaData";
import AreaCard from "../molecules/AreaCard";

const Venues = () => {
  const { data, current } = useAreaData();
  const targetData = data.filter((d) => d.prefecture === current);
  return (
    <>
      {current !== "-" ? (
        <h2>{current}の会場</h2>
      ) : (
        <h2>都道府県を選択してください</h2>
      )}
      <div>
        {targetData.map((d) => (
          <AreaCard data={d} key={d.venue} />
        ))}
      </div>
    </>
  );
};

export default Venues;
