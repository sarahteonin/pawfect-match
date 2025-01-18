import React from "react";
import "../index.css";
import updateBreed from "../breeds";

export default function Page14() {
  const handleNext = () => {
    window.location.href = "/15";
  };

  return (
    <div>
      <h2>
        It’s dinner time, and your human serves your favorite meal.
        <br />
        What's your reaction?
      </h2>
      <div className={"button-container"}>
        <button onClick={() => {
            handleNext();
            updateBreed( ["german_shephard", "bulldog"]);
        }}>
          Wait patiently until they say it’s okay to eat.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["golden_retriever", "pomeranian"]);
        }}>
          Dive right in—you’ve been waiting for this!
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["dachshund", "cocker_spaniel"]);
        }}>
          Sniff it carefully before starting.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["beagle", "collie"]);
        }}>
          Share a piece with another dog or human first.
        </button>
      </div>
    </div>
  );
}
