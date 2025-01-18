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
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
