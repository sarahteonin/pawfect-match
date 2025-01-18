import React from "react";
import "../index.css";

export default function Page11() {
  const handleNext = () => {
    window.location.href = "/12";
  };

  return (
    <div>
      <h2>
        You find a dark cave with strange noises coming from inside.
        <br />
        What's your next move?
      </h2>
      <div className={"button-container"}>
        <button onClick={handleNext}>Enter boldly to investigate.</button>
        <button onClick={handleNext}>
          Stay outside and bark to warn others.
        </button>
        <button onClick={handleNext}>
          Approach cautiously, sniffing for clues.
        </button>
        <button onClick={handleNext}>
          Keep your distance and observe from afar.
        </button>
      </div>
    </div>
  );
}
