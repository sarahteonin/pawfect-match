import React from "react";
import "../index.css";

export default function Page15() {
  const handleNext = () => {
    window.location.href = "/result";
  };

  return (
    <div>
      <h2>
        As the day ends, you drift into sleep.
        <br />
        What do you dream about?
      </h2>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
