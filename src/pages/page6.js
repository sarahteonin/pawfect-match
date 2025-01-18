import React from 'react';
import "../index.css";

export default function Page6() {

    const handleNext = () => {
        window.location.href = "/7";
    };

    return (
        <div>
            <h2>
                You find yourself in a dense forest with new sights and smells.
                <br/>
                What do you focus on?
            </h2>

            <button onClick={handleNext}>Follow the sound of running water—it seems peaceful.</button>
            <button onClick={handleNext}>Chase a squirrel you just spotted.</button>
            <button onClick={handleNext}>Carefully sniff every tree and track the scent trail.</button>
            <button onClick={handleNext}>Look for signs of other animals or humans nearby.</button>
        </div>
        
    );
}