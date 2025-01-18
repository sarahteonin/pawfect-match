import React from 'react';

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
            <div className={"button-container"}>
                <button onClick={handleNext}>Lounge in the sun and take a nap.</button>
                <button onClick={handleNext}>Chase a ball or play tug-of-war—so much energy!</button>
                <button onClick={handleNext}>Sit by the window and watch the world go by.</button>
                <button onClick={handleNext}> Learn a new trick or solve a puzzle toy.</button>
            </div>
        </div>
    );
}