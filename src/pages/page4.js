import React from 'react';
import park from './images/page4.png';
import updateBreed from '../breeds';
import { useNavigate } from 'react-router-dom';

export default function Page4() {
    const navigate = useNavigate(); // Initialize navigate function

    const handleNext = () => {
        navigate('/5'); // Navigate to the "/1" route
    };

    return (
        <div>
            <h2>At the park, you encounter other dogs. 
                <br/>
                What’s your reaction?
            </h2>
            <img src={park} className={"image-container"}/>
            <div className={"button-container"}>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["collie", "german_shephard"]);
                }}>
                    Greet them politely but stick to your human.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["golden_retriever", "pomeranian"]);
                }}>
                    Run over excitedly and start playing immediately.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["dachshund", "bulldog"]);
                }}>
                    Observe from a distance until you feel comfortable.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["doberman", "poodle"]);
                }}>
                    Take charge of the group and lead the play session.
                </button>
            </div>
        </div>
    );
}