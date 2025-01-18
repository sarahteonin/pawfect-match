import React from "react";
import "../index.css";

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
        <div className={"button-container"}>
            <button onClick={handleNext}>Sniff it thoroughly to investigate.</button>
            <button onClick={handleNext}>Bark at it—it could be dangerous!</button>
            <button onClick={handleNext}>Ignore it and move on.</button>
            <button onClick={handleNext}>Poke it gently to see what happens.</button>
        </div>
    </div>
    
  );
}
