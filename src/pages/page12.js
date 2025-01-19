import React from "react";
import home from './images/page12.png';
import "../index.css";
import updateBreed from "../breeds";

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
      <img src={home} className={"image-container"}/>
      <div className={"button-container"}>
        <button onClick={() => {
            handleNext();
            updateBreed( ["bulldog", "dachshund"]);
        }}>
          Relief—you’ve missed your cozy spot.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["pomeranian", "golden retriever"]);
        }}>
          Excitement—time to tell your human about your journey!
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["doberman", "poodle"]);
        }}>
          A sense of accomplishment from your exploration.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["beagle", "collie"]);
        }}>
          Gratitude for your group’s teamwork.
        </button>
      </div>
    </div>
  );
}
