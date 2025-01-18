import React from 'react';
import questionMark from "./images/page3.png";
import updateBreed from '../breeds';

export default function Page3() {
    const handleNext = () => {
        window.location.href = "/4";
    };

    return (
        <div>
            <h2>After your walk, your human lets you decide what to do next. 
                <br/>
                What’s your pick?
            </h2>
            <img src={questionMark} className={"image-container"}/>
            <div className={"button-container"}>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["bulldog", "golden_retriever"]);
                }}>
                    Lounge in the sun and take a nap.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["pomeranian", "beagle"]);
                }}>
                    Chase a ball or play tug-of-war—so much energy!
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["cocker_spaniel", "dachshund"]);
                }}>
                    Sit by the window and watch the world go by.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["doberman", "poodle"]);
                }}>
                    Learn a new trick or solve a puzzle toy.
                </button>
            </div>
        </div>
    );
}