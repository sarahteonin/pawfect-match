import React from 'react';
import gate from './images/page5.png';
import updateBreed from '../breeds';

export default function Page5() {
    const handleNext = () => {
        window.location.href = "/6";
    };

    return (
        <div>
            <h2>You notice an open gate and a path leading to an unfamiliar area.
                <br/>
                What do you do?
            </h2>
            <img src={gate} className={"image-container"}/>
            <div className={"button-container"}>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["bulldog", "collie"]);
                }}>
                    Stay put—you wouldn’t stray far from home.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["pomeranian", "poodle"]);
                }}>
                    Dash through the gate, ready for an adventure.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["beagle", "dachshund"]);
                }}>
                    Sniff cautiously and explore only if it feels safe.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["german_shephard", "golden_retriever"]);
                }}>
                    Alert your human about the open gate first.
                </button>
            </div>
        </div>
    );
}