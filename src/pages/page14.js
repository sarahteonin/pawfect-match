import React from "react";
import "../index.css";

export default function Page14() {
  const handleNext = () => {
    window.location.href = "/15";
  };

  return (
    <div>
      <h2>
        It’s dinner time, and your human serves your favorite meal.
        <br />
        What's your reaction?
      </h2>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
