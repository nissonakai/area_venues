import React from "react";

const CardTexts = ({ venue, adress, call_flag }) => {
  return (
    <>
      <h3 className="c-cardtitle">{venue}</h3>
      <p>
        <span className="c-cardadress">住所：</span>
        {adress}
      </p>
      {call_flag && <p>※ただいま、電話面接でのご案内になります</p>}
    </>
  );
};

export default CardTexts;
