import React, { useEffect, useState } from "react";
import "../index.css";
import { calculateBreed, resetBreeds } from "../breeds";

export default function Resultpage() {
  const [result, setResult] = useState("");

  useEffect(() => {
    // Calculate the result and store in a variable
    const breedResult = calculateBreed();

    // Set the result state immediately
    setResult(breedResult);

    // Use a slight delay to reset breeds after rendering
    setTimeout(() => {
      resetBreeds();
    }, 0);
  }, []);

  return (
    <div>
      <h1>You are...</h1>
      <h2>{result}</h2>
    </div>
  );
}
