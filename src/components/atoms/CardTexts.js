import React from "react";

const CardTexts = ({ venue, adress, call_flag }) => {
  return (
    <>
      <h3>{venue}</h3>
      <p>住所：{adress}</p>
      {call_flag && <p>※ただいま、電話面接でのご案内になります</p>}
    </>
  );
};

export default CardTexts;
