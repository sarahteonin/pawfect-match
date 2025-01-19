import React from 'react';
import stream from './images/page8.png';
import "../index.css";
import updateBreed from '../breeds';
import { useNavigate } from 'react-router-dom';

export default function Page8() {
    const navigate = useNavigate(); // Initialize navigate function

    const handleNext = () => {
        navigate('/9'); // Navigate to the "/1" route
    };

    return (
        <div>
            <h2>
                You encounter a small stream blocking your path. 
                <br/>
                What’s your plan?
            </h2>
            <img src={stream} className={"image-container"}/>
            <div className={"button-container"}>
            <button onClick={() => {
                    handleNext();
                    updateBreed( ["golden_retriever", "poodle"]);
                }}>
                    Jump right in—you love water!
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["dachund", "cocker_spaniel"]);
                }}>
                    Find a way around to avoid getting wet.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["bulldog", "collie"]);
                }}>
                    Wait and see if there's a safer way across.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["doberman", "german_shephard"]);
                }}>
                    Help other dogs cross first before attempting yourself.
                </button>
            </div>
        </div>
        
    );
}