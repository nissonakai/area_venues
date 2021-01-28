import React from "react";

const MapButton = ({ url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      Mapを見る
    </a>
  );
};

export default MapButton;
