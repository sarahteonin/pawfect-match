import React from 'react';
import "../index.css";

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
                <button onClick={handleNext}>Stay cautious and observe their actions.</button>
                <button onClick={handleNext}>Accept the treat happily and wag your tail.</button>
                <button onClick={handleNext}>Sniff them thoroughly before deciding if they’re trustworthy.</button>
                <button onClick={handleNext}>Stand protectively between the stranger and your group.</button>
            </div>
        </div>
        
    );
}