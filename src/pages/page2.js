import React from "react";
import walk from "./images/page2.png";
import updateBreed from "../breeds";
import { useNavigate } from 'react-router-dom';

export default function Page2() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleNext = () => {
      navigate('/3'); // Navigate to the "/1" route
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
            updateBreed( ["cocker_spaniel", "collie"]);
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
            updateBreed( ["german_shepherd", "bulldog"]);
        }}>
          Keep an eye on everyone, ensuring the group stays together.
        </button>
      </div>
    </div>
  );
}
