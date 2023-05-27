import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import "./DiagnoseHome.css";

import React, { useState } from "react";

function Diagnose() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [image, setImage] = useState()

  const diagnose = () => {

  }

  return (
    <>
      <div className="drop-menu">
        <p>Select a Image you want to diagnose</p>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="option1">Select</option>
          <option value="option2">CT Scan</option>
          <option value="option3">MRI</option>
        </select>
        {selectedOption !== "option1" && (
          <div className="selected-content">
            <div className="imgtag">
              <button onClick={() => { document.getElementById("input").click(); console.log("clicked") }} className="img-box">
                <FontAwesomeIcon icon={faUpload} />
                Upload images here
              </button>
              <input id="input" type="file" accept="image/*" onChange={(event) => setImage(URL.createObjectURL(event.target.files[0]))} style={{ display: "none" }} />
            </div>
            <button onClick={diagnose} className="btn">Diagnose</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Diagnose;
