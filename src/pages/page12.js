import React from "react";
import "../index.css";
import updateBreed from "../breeds";
import { useNavigate } from 'react-router-dom';

export default function Page12() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleNext = () => {
      navigate('/13'); // Navigate to the "/1" route
  };

  return (
    <div>
      <h2>
        After your adventure, you finally spot your home in the distance.
        <br />
        What do you feel?
      </h2>
      <div className={"button-container"}>
        <button onClick={() => {
            handleNext();
            updateBreed( ["bulldog", "dachshund"]);
        }}>
          Relief—you’ve missed your cozy spot.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["pomeranian", "golden_retriever"]);
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
