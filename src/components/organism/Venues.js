import React from "react";
import useAreaData from "../../logic/useAreaData";
import NoVenue from "../atoms/NoVenue";
import AreaCard from "../molecules/AreaCard";

const Venues = () => {
  const { data, current } = useAreaData();
  const targetData = data.filter((d) => d.prefecture === current);
  return (
    <div className="l-venues">
      {current !== "-" ? (
        <>
          <h2>{current}の会場</h2>
          <div>
            {targetData.length > 0 ? (
              targetData.map((d) => <AreaCard data={d} key={d.venue} />)
            ) : (
              <NoVenue />
            )}
          </div>
        </>
      ) : (
        <h2>都道府県を選択してください</h2>
      )}
    </div>
  );
};

export default Venues;
