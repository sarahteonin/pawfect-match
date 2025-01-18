import React from "react";
import can from './images/page9.png';
import "../index.css";
import updateBreed from "../breeds";

export default function Page9() {
  const handleNext = () => {
    window.location.href = "/10";
  };

  return (
    <div>
        <h2>
            You stumble upon a strange object—a shiny metal can.
            <br/>
            What do you do?
        </h2>
        <img src={can} className={"image-container"}/>
        <div className={"button-container"}>
          <button onClick={() => {
            handleNext();
            updateBreed( ["beagle", "dachshund"]);
          }}>
            Sniff it thoroughly to investigate.
          </button>
          <button onClick={() => {
              handleNext();
              updateBreed( ["doberman", "bulldog"]);
          }}>
            Bark at it—it could be dangerous!
          </button>
          <button onClick={() => {
              handleNext();
              updateBreed( ["cocker_spaniel", "collie"]);
          }}>
            Ignore it and move on.
          </button>
          <button onClick={() => {
              handleNext();
              updateBreed( ["pomeranian", "poodle"]);
          }}>
            Poke it gently to see what happens.
          </button>
        </div>
    </div>
    
  );
}
