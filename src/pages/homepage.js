import React from 'react';
import "../index.css";

export default function Homepage() {
    const handleStart = () => {
        window.location.href = "/1";
    };

    return (
        <div>
            <h1>What dog breed are you?</h1>
            <h2>
                Imagine you’ve woken up as a dog for a day! 🐾 
                <br/>
                Let’s explore your doggy instincts to uncover which breed matches your personality.
            </h2>
            <button onClick={handleStart}>Start</button>
        </div>
    );
}