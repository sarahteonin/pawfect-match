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
      <div className={"button-container"}>
        <button onClick={handleNext}>
          Wait patiently until they say it’s okay to eat.
        </button>
        <button onClick={handleNext}>
          Dive right in—you’ve been waiting for this!
        </button>
        <button onClick={handleNext}>
          Sniff it carefully before starting.
        </button>
        <button onClick={handleNext}>
          Share a piece with another dog or human first.
        </button>
      </div>
    </div>
  );
}
