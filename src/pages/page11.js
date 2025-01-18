import React from "react";
import "../index.css";
import updateBreed from "../breeds";

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
        <button onClick={() => {
            handleNext();
            updateBreed( ["doberman", "german shephard"]);
        }}>
          Enter boldly to investigate.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["golden retriever", "bulldog"]);
        }}>
          Stay outside and bark to warn others.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["beagle", "dachshund"]);
        }}>
          Approach cautiously, sniffing for clues.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["cocker spaniel", "collie"]);
        }}>
          Keep your distance and observe from afar.
        </button>
      </div>
    </div>
  );
}
