// PetitCurieux.js
import React, { useState } from "react";
import "../styles/PetitCurieux.css";

const PetitCurieux = ({ onDisappear }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value === 'go' || event.target.value === 'Go' || event.target.value === 'GO') {
      onDisappear(); // Appeler la fonction pour faire disparaître PetitCurieux
    }
  };

  return (
    <div className="petit-curieux-bg">
      <h2 className="title">Petit curieux...</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default PetitCurieux;
