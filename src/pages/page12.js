import React from "react";
import "../index.css";

export default function Page12() {
  const handleNext = () => {
    window.location.href = "/13";
  };

  return (
    <div>
      <h2>
        After your adventure, you finally spot your home in the distance.
        <br />
        What do you feel?
      </h2>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
