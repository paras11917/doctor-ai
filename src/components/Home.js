import React from "react";
import "./Home.css";
import body from "../images/FullFullBody.png"

function Home(props) {
  return (
    <div className="home">
      <div className="features">
        <h1 className="features-header">
          Empowering Healthcare with AI-Driven Diagnosis
        </h1>
        <div className="features-list">
          <div className="features-item">
            <h2 className="features-item-header">Symptom Diagnosis</h2>
            <p className="features-item-description">
              Get an accurate diagnosis of your disease by entering your
              symptoms and getting personalized recommendations.
            </p>
          </div>
          <div className="features-item">
            <h2 className="features-item-header">Medical Image Analysis</h2>
            <p className="features-item-description">
              Our AI-powered model can analyze medical images such as CT scans,
              X-rays, and MRIs to help with diagnosis.
            </p>
          </div>
        </div>
        <button className="features-button">Have a Diagnosis</button>
      </div>
      <div className="body-image">
        <img src = {body} alt = "body"/>
        {/* <div className="full-body">
          <img src={fullbody} alt="full-body"></img>
        </div>
        <div className="head">
          <img src={head} alt="head"></img>
        </div>
        <div className="lungs">
          <img src={lungs} alt="lungs"></img>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
