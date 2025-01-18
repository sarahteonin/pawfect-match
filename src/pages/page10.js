import React from "react";
import "../index.css";

export default function Page10() {
  const handleNext = () => {
    window.location.href = "/11";
  };

  return (
    <div>
        <h2>
            You realize you’ve wandered far from home. 
            <br/>
            How do you respond?
        </h2>
        <div className={"button-container"}>
            <button onClick={handleNext}>Stay calm and try to retrace your steps.</button>
            <button onClick={handleNext}>Bark loudly to call for help.</button>
            <button onClick={handleNext}>Follow a familiar scent trail.</button>
            <button onClick={handleNext}>Stick with the group and look for landmarks together.</button>
        </div>
    </div>
    
  );
}
