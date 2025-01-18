import React from "react";
import "../index.css";
import { calculateBreed } from "../breeds";

export default function Resultpage() {
  return (
    <div>
      <h1>You are...</h1>
      <h2>{calculateBreed()}</h2>
    </div>
  );
}
