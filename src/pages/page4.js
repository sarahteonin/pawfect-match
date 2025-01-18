import React from 'react';
import updateBreed from '../breeds';

export default function Page4() {
    const handleNext = () => {
        window.location.href = "/5";
    };

    return (
        <div>
            <h2>At the park, you encounter other dogs. 
                <br/>
                What’s your reaction?
            </h2>
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