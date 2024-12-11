import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./TherapeuticArea.css";


const TherapeuticArea = () => {
  const handleCardClick = (e) => {
    e.currentTarget.classList.toggle("flipped");
  };
  const navigate = useNavigate()

  return (
    <div className="container">
      <header className="header">
        <h1>Select a Therapeutic Area</h1>
        <p>Explore specific indications for each therapeutic area</p>
      </header>

      <div className="cards-container">
        {/* Oncology Card */}
        <div className="card oncology" onClick={handleCardClick}>
          <div className="card-front">
            <div className="card-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"></path>
                <path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10"></path>
              </svg>
            </div>
            <h2>Oncology</h2>
            <p>Click to explore cancer indications</p>
          </div>
          <div className="card-back">
            <h2>Oncology Indications</h2>
            <div className="indication-buttons">
             
              <button
                className="indication-button"
                onClick={() => navigate("/overview")}
              >
                Prostate Cancer
              </button>
              
              <button className="indication-button">Lung Cancer</button>
              <button className="indication-button">Colorectal Cancer</button>
              <button className="indication-button">Melanoma</button>
            </div>
          </div>
        </div>

        {/* Cardiology Card */}
        <div className="card cardiology" onClick={handleCardClick}>
          <div className="card-front">
            <div className="card-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h2>Cardiology</h2>
            <p>Click to explore heart conditions</p>
          </div>
          <div className="card-back">
            <h2>Cardiology Indications</h2>
            <div className="indication-buttons">
              <button className="indication-button">Hypertension</button>
              <button className="indication-button">Heart Failure</button>
              <button className="indication-button">Arrhythmia</button>
              <button className="indication-button">Coronary Artery Disease</button>
            </div>
          </div>
        </div>

        {/* Neurology Card */}
        <div className="card neurology" onClick={handleCardClick}>
          <div className="card-front">
            <div className="card-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            <h2>Neurology</h2>
            <p>Click to explore neurological conditions</p>
          </div>
          <div className="card-back">
            <h2>Neurology Indications</h2>
            <div className="indication-buttons">
              <button className="indication-button">Multiple Sclerosis</button>
              <button className="indication-button">Epilepsy</button>
              <button className="indication-button">Parkinson's Disease</button>
              <button className="indication-button">Alzheimer's Disease</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapeuticArea;
