import React from "react";
import "../index.css";

export default function Page13() {
  const handleNext = () => {
    window.location.href = "/14";
  };

  return (
    <div>
      <h2>
        Your human greets you warmly at the door.
        <br />
        How do you react?
      </h2>
      <div className={"button-container"}>
        <button onClick={handleNext}>
          Wag your tail and nuzzle them affectionately.
        </button>
        <button onClick={handleNext}>
          Jump up excitedly and bark happily.
        </button>
        <button onClick={handleNext}>
          Sit calmly and let them check if you’re okay.
        </button>
        <button onClick={handleNext}>
          Bring them a token from your adventure as a gift.
        </button>
      </div>
    </div>
  );
}
