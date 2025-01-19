import React from 'react';
import birdsChirping from "./images/page1.png";
import updateBreed from "../breeds";
import { useNavigate } from 'react-router-dom';

export default function Page1() {
    const navigate = useNavigate(); // Initialize navigate function

    const handleNext = () => {
        navigate('/2'); // Navigate to the "/1" route
    };

    return (
        <div>
            <h2>You wake up to the sound of birds chirping. 
                <br/>
                What’s your first move?
            </h2>
            <img src={birdsChirping} className={"image-container"}/>
            <div className={"button-container"}>
                <button onClick={() => {
                    handleNext();
                    updateBreed(["bulldog", "cocker_spaniel"]);
                }}>
                    Stretch out and roll around lazily in your cozy bed.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed(["beagle", "poodle"]);
                }}>
                    Dash outside to explore the backyard.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed(["dachshund", "golden_retriever"]);
                }}>
                    Run straight to the food bowl—breakfast time!
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed(["german_shepherd", "collie"]);
                }}>
                    Sit and wait for your human to wake up, ready to assist them.
                </button>
            </div>
        </div>
    );
}