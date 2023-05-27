import React, { useState } from "react";
import './DiagnoseBody.css'
import fullbody from "../images/FullBody.png";
import head from "../images/head.png";
import lungs from "../images/lungs.png";
import HeadComponent from "./HeadComponent";
import LungsComponent from "./LungsComponent";

function DiagnoseBody() {
  const [showHeadComponent, setShowHeadComponent] = useState(false);
  const [showLungsComponent, setShowLungsComponent] = useState(false);

  const handleHeadClick = () => {
    setShowHeadComponent(true);
    setShowLungsComponent(false);
  }

  const handleLungsClick = () => {
    setShowLungsComponent(true);
    setShowHeadComponent(false);
  }

  return (
    <div className="diagnoseBody">
      {showHeadComponent && <HeadComponent />}
      {showLungsComponent && <LungsComponent />}
      {!showHeadComponent && !showLungsComponent && (
        <div className="body-image">
          <div className="full-body">
            <img src={fullbody} alt="full-body"></img>
          </div>
          <div className="head" onClick={handleHeadClick}>
            <img src={head} alt="head"></img>
          </div>
          <div className="lungs" onClick={handleLungsClick}>
            <img src={lungs} alt="lungs"></img>
          </div>
        </div>
      )}
    </div>
  );
}

export default DiagnoseBody;
