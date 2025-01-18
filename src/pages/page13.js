import React from "react";
import "../index.css";

export default function Page13() {
  const handleNext = () => {
    window.location.href = "/14";
  };

  return (
    <div>
      <h2>
        Your human greets you warmly at the door.
        <br />
        How do you react?
      </h2>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
