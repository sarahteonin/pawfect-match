import React from 'react';
import birdsChirping from "./images/page1.png";
import updateBreed from "../breeds";

export default function Page1() {
    
    const handleNext = () => {
        window.location.href = "/2";
    };

    return (
        <div>
            <h2>You wake up to the sound of birds chirping. 
                <br/>
                What’s your first move?
            </h2>
            <img src={birdsChirping} style={{ width: '30%', height: 'auto' }}/>
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