import React from "react";

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
      <div className={"button-container"}>
        <button onClick={handleNext}>Stick close and walk calmly by their side.</button>
        <button onClick={handleNext}>Sniff everything in sight—so many smells!</button>
        <button onClick={handleNext}>Bolt ahead, eager to see what’s around the next corner.</button>
        <button onClick={handleNext}>Keep an eye on everyone, ensuring the group stays together.</button>
      </div>
    </div>
  );
}
