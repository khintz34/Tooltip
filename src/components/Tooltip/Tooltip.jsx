import React from "react";
import "./Tooltip.css";

const Tooltip = () => {
  return (
    <div id="mainContainer">
      <p className="tooltip pTopLeft aRight">
        Top
        <span className="tooltipText">text</span>
      </p>
      <p className="tooltip pTopRight aLeft">
        Top <span className="tooltipText">text</span>
      </p>
      <p className="tooltip pLeft">
        Left <span className="tooltipText">text</span>
      </p>
      <p className="tooltip pRight">
        Right <span className="tooltipText">text</span>
      </p>
      <p className="tooltip pLeft">
        Left <span className="tooltipText">text</span>
      </p>
      <p className="tooltip pRight">
        Right <span className="tooltipText">text</span>
      </p>
      <p className="tooltip pBotLeft aRight">
        Bottom <span className="tooltipText">text</span>
      </p>
      <p className="tooltip pBotRight aLeft">
        Bottom <span className="tooltipText">text</span>
      </p>
    </div>
  );
};

export default Tooltip;
