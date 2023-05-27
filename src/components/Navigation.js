import React from "react";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";


function Navigation(props) {
  const { currentPage, onClick } = props;
  const navigate = useNavigate()
  return (
    <nav className="navigation">
      <div className="logo">DOCTO.AI</div>
      <ul className="nav-links">
        <li
          className={currentPage === "home" ? "active" : ""}
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className={currentPage === "diagnose" ? "active" : ""}
          onClick={() => navigate("/diagnose")}
        >
          Image Analysis
        </li>
        <li
          className={currentPage === "report" ? "active" : ""}
          onClick={() => navigate("/report")}
        >
          Symptom Analysis
        </li>
      </ul>
      <div className="sign_up" onClick={() => navigate("/sign_up")}>
        <button>SIGN UP</button>
      </div>
    </nav>
  );
}

export default Navigation;
