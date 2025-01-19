import React, { useEffect, useState } from "react";
import "../index.css";
import { calculateBreed, resetBreeds } from "../breeds";
import collie from "./images/collie.png";
import german_shepherd from "./images/german_shepherd.png";
import beagle from "./images/beagle.png";
import dachshund from "./images/dachshund.png";
import cocker_spaniel from "./images/cocker_spaniel.png";
import golden_retriever from "./images/golden_retriever.png";
import bulldog from "./images/bulldog.png";
import poodle from "./images/poodle.png";
import pomeranian from "./images/pomeranian.png";
import doberman from "./images/doberman.png";

const breedImages = {
  collie: collie,
  german_shepherd: german_shepherd,
  beagle: beagle,
  dachshund: dachshund,
  cocker_spaniel: cocker_spaniel,
  golden_retriever: golden_retriever,
  bulldog: bulldog,
  poodle: poodle,
  pomeranian: pomeranian,
  doberman: doberman,
};

export default function Resultpage() {
  const [result, setResult] = useState("");
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    // Calculate the result and store in a variable
    const breedResult = calculateBreed();

    // Convert breed result to match the image key format
    const formattedBreed = breedResult.toLowerCase().replace(/\s+/g, '_');

    // Set the result state immediately
    setResult(breedResult);

    // Set the image path based on the breed result
    const breedImage = breedImages[formattedBreed];
    setImagePath(breedImage);

    // Use a slight delay to reset breeds after rendering
    setTimeout(() => {
      resetBreeds();
    }, 0);
  }, []);

  return (
    <div>
      <h2 style={{ paddingTop: "30px" }}>You are...</h2>
      {imagePath ? (
        <img src={imagePath} className={"result-image-container"} alt={`${result} breed`} />
      ) : (
        <h3>No breeds tracked yet! Hurry and do the quiz to find which dog breed you are!</h3>
      )}
    </div>
  );
}
