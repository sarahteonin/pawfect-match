import React from "react";
import cave from './images/page11.png';
import "../index.css";
import updateBreed from "../breeds";
import { useNavigate } from 'react-router-dom';

export default function Page11() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleNext = () => {
      navigate('/12'); // Navigate to the "/1" route
  };

  return (
    <div>
      <h2>
        You find a dark cave with strange noises coming from inside.
        <br />
        What's your next move?
      </h2>
      <img src={cave} className={"image-container"}/>
      <div className={"button-container"}>
        <button onClick={() => {
            handleNext();
            updateBreed( ["doberman", "german_shephard"]);
        }}>
          Enter boldly to investigate.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["golden_retriever", "bulldog"]);
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
            updateBreed( ["cocker_spaniel", "collie"]);
        }}>
          Keep your distance and observe from afar.
        </button>
      </div>
    </div>
  );
}
