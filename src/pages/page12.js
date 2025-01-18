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
      <div className={"button-container"}>
        <button onClick={handleNext}>
          Relief—you’ve missed your cozy spot.
        </button>
        <button onClick={handleNext}>
          Excitement—time to tell your human about your journey!
        </button>
        <button onClick={handleNext}>
          A sense of accomplishment from your exploration.
        </button>
        <button onClick={handleNext}>
          Gratitude for your group’s teamwork.
        </button>
      </div>
    </div>
  );
}
