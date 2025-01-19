import React from "react";
import sleep from './images/page15.png';
import "../index.css";
import updateBreed from "../breeds";
import { useNavigate } from 'react-router-dom';

export default function Page15() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleNext = () => {
      navigate('/result'); // Navigate to the "/1" route
  };

  return (
    <div>
      <h2>
        As the day ends, you drift into sleep.
        <br />
        What do you dream about?
      </h2>
      <img src={sleep} className={"image-container"}/>
      <div className={"button-container"}>
        <button onClick={() => {
            handleNext();
            updateBreed( ["bulldog", "cocker_spaniel"]);
        }}>
          A sunny field where you can relax peacefully.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["beagle", "pomeranian"]);
        }}>
          Running through forests and chasing squirrels.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["golden_retriever", "poodle"]);
        }}>
          Exploring new places with your human by your side.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["doberman", "german_shephard"]);
        }}>
          Protecting your home and family from any danger.
        </button>
      </div>
    </div>
  );
}
