import React from "react";
import useAreaData from "../../logic/useAreaData";
import Constants from "../../Constants";

const AreaSelect = () => {
  const { current, handleSelect } = useAreaData();
  const { prefectures } = Constants;
  return (
    <div>
      <select
        name="prefecture"
        value={current}
        onChange={(e) => handleSelect(e)}
      >
        {prefectures.map((prefecture) => (
          <option value={prefecture} key={prefecture}>
            {prefecture}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AreaSelect;
