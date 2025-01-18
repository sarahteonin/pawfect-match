import React from 'react';
import "../index.css";
import updateBreed from '../breeds';


export default function Page7() {
    const handleNext = () => {
        window.location.href = "/8";
    };

    return (
        <div>
            <h2>
                You meet a kind stranger offering treats.
                <br/>
                What do you do?
            </h2>
            <div className={"button-container"}>
            <button onClick={() => {
                    handleNext();
                    updateBreed( ["doberman", "german_shephard"]);
                }}>
                    Stay cautious and observe their actions.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["golden_retriever", "pomeranian"]);
                }}>
                    Accept the treat happily and wag your tail.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["beagle", "dachshund"]);
                }}>
                    Sniff them thoroughly before deciding if they’re trustworthy.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["collie", "bulldog"]);
                }}>
                    Stand protectively between the stranger and your group.
                </button>
            </div>
        </div>
        
    );
}