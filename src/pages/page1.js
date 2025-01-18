import React from 'react';

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
            <div className={"button-container"}>
                <button onClick={handleNext}>Stretch out and roll around lazily in your cozy bed.</button>
                <button onClick={handleNext}>Dash outside to explore the backyard.</button>
                <button onClick={handleNext}>Run straight to the food bowl—breakfast time!</button>
                <button onClick={handleNext}>Sit and wait for your human to wake up, ready to assist them.</button>
            </div>
        </div>
    );
}