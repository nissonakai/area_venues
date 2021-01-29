import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const MapButton = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="c-mapbutton"
    >
      <FaMapMarkerAlt />
      Map
    </a>
  );
};

export default MapButton;
