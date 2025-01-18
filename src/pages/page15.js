import React from "react";
import "../index.css";

export default function Page15() {
  const handleNext = () => {
    window.location.href = "/result";
  };

  return (
    <div>
      <h2>
        As the day ends, you drift into sleep.
        <br />
        What do you dream about?
      </h2>
      <div className={"button-container"}>
        <button onClick={handleNext}>
          A sunny field where you can relax peacefully.
        </button>
        <button onClick={handleNext}>
          Running through forests and chasing squirrels.
        </button>
        <button onClick={handleNext}>
          Exploring new places with your human by your side.
        </button>
        <button onClick={handleNext}>
          Protecting your home and family from any danger.
        </button>
      </div>
    </div>
  );
}
