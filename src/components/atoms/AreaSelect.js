import React from "react";
import useAreaData from "../../logic/useAreaData";
import Constants from "../../Constants";
import { Label, Select } from "@rebass/forms";

const AreaSelect = () => {
  const { current, handleSelect } = useAreaData();
  const { prefectures } = Constants;
  return (
    <>
      <Label htmlFor="prefecture" className="c-label">
        エリアの選択
      </Label>
      <Select
        name="prefecture"
        value={current}
        onChange={(e) => handleSelect(e)}
      >
        {prefectures.map((prefecture) => (
          <option value={prefecture} key={prefecture}>
            {prefecture}
          </option>
        ))}
      </Select>
    </>
  );
};

export default AreaSelect;
