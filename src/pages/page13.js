import React from "react";
import human from './images/page13.png';
import "../index.css";
import updateBreed from "../breeds";
import { useNavigate } from 'react-router-dom';

export default function Page13() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleNext = () => {
      navigate('/14'); // Navigate to the "/1" route
  };

  return (
    <div>
      <h2>
        Your human greets you warmly at the door.
        <br />
        How do you react?
      </h2>
      <img src={human} className={"image-container"}/>
      <div className={"button-container"}>
        <button onClick={() => {
            handleNext();
            updateBreed( ["golden_retriever", "collie"]);
        }}>
          Wag your tail and nuzzle them affectionately.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["pomeranian", "poodle"]);
        }}>
          Jump up excitedly and bark happily.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["doberman", "cocker_spaniel"]);
        }}>
          Sit calmly and let them check if you’re okay.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["beagle", "dachshund"]);
        }}>
          Bring them a token from your adventure as a gift.
        </button>
      </div>
    </div>
  );
}
