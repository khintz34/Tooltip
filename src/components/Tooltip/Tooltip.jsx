import React from "react";
import "./Tooltip.css";

const Tooltip = () => {
  return (
    <div id="mainContainer">
      <div className="tipContainer flexRight ">
        <p className="tooltip pTopLeft aLeft">
          Top
          <span className="tooltipText">text</span>
        </p>
      </div>
      <div className="tipContainer flexLeft">
        <p className="tooltip pTopRight  aRight">
          Top <span className="tooltipText">text</span>
        </p>
      </div>
      <div className="tipContainer">
        <p className="tooltip pLeft">
          Left <span className="tooltipText">text</span>
        </p>
      </div>
      <div className="tipContainer">
        <p className="tooltip pRight">
          Right <span className="tooltipText">text</span>
        </p>
      </div>
      <div className="tipContainer">
        <p className="tooltip pLeft">
          Left <span className="tooltipText">text</span>
        </p>
      </div>
      <div className="tipContainer">
        <p className="tooltip pRight">
          Right <span className="tooltipText">text</span>
        </p>
      </div>
      <div className="tipContainer flexRight">
        <p className="tooltip pBotLeft">
          Bottom <span className="tooltipText">text</span>
        </p>
      </div>
      <div className="tipContainer flexLeft">
        <p className="tooltip pBotRight">
          Bottom <span className="tooltipText">text</span>
        </p>
      </div>
    </div>
  );
};

export default Tooltip;
