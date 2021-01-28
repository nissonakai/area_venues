import React from "react";
import MapButton from "../atoms/MapButton";
import CardTexts from "../atoms/CardTexts";

const AreaCard = ({ data }) => {
  const { adress, url, venue } = data;

  const venue_formated = venue.replace(".", "");
  const call_flag = adress.indexOf("（") !== -1;
  const adress_formated = call_flag ? adress.split("（")[0] : adress;

  return (
    <div className="p-areacard">
      <CardTexts
        venue={venue_formated}
        adress={adress_formated}
        call_flag={call_flag}
      />
      <MapButton url={url} />
    </div>
  );
};

export default AreaCard;
