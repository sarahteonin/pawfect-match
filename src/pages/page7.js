import React from 'react';
import treats from './images/page7.png';
import "../index.css";
import updateBreed from '../breeds';
import { useNavigate } from 'react-router-dom';


export default function Page7() {
    const navigate = useNavigate(); // Initialize navigate function

    const handleNext = () => {
        navigate('/8'); // Navigate to the "/1" route
    };

    return (
        <div>
            <h2>
                You meet a kind stranger offering treats.
                <br/>
                What do you do?
            </h2>
            <img src={treats} className={"image-container"}/>
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