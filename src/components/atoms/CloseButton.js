import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CloseButton = () => {
  return (
    <>
      {window.opener?.location.origin === process.env.REACT_APP_SITE_ORIGIN && (
        <button className="c-closebutton" onClick={() => window.close()}>
          <AiOutlineCloseCircle />
          閉じる
        </button>
      )}
    </>
  );
};

export default CloseButton;
