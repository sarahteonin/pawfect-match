import React from 'react';

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
            <div className={"button-container"}>
                <button onClick={handleNext}>Stay put—you wouldn’t stray far from home.</button>
                <button onClick={handleNext}>Dash through the gate, ready for an adventure.</button>
                <button onClick={handleNext}>Sniff cautiously and explore only if it feels safe.</button>
                <button onClick={handleNext}>Alert your human about the open gate first.</button>
            </div>
        </div>
    );
}