import React from "react";
import walk from "./images/page2.png";
import updateBreed from "../breeds";

export default function Page2() {
  const handleNext = () => {
    window.location.href = "/3";
  };

  return (
    <div>
      <h2>Your human grabs the leash—it’s walk time! 
        <br/>
        How do you behave on your walk?
      </h2>
      <img src={walk} className={"image-container"}/>
      <div className={"button-container"}>
        <button onClick={() => {
            handleNext();
            updateBreed( ["cocker spaniel", "collie"]);
        }}>
          Stick close and walk calmly by their side.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["beagle", "poodle"]);
        }}>
          Sniff everything in sight—so many smells!
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["pomeranian", "dachshund"]);
        }}>
          Bolt ahead, eager to see what’s around the next corner.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["german shepherd", "bulldog"]);
        }}>
          Keep an eye on everyone, ensuring the group stays together.
        </button>
      </div>
    </div>
  );
}
