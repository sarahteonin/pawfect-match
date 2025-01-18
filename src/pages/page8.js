import React from 'react';
import "../index.css";

export default function Page8() {
    const handleNext = () => {
        window.location.href = "/9";
    };

    return (
        <div>
            <h2>
                You encounter a small stream blocking your path. 
                <br/>
                What’s your plan?
            </h2>
            <div className={"button-container"}>
                <button onClick={handleNext}>Jump right in—you love water!</button>
                <button onClick={handleNext}>Find a way around to avoid getting wet.</button>
                <button onClick={handleNext}>Wait and see if there's a safer way across.</button>
                <button onClick={handleNext}>Help other dogs cross first before attempting yourself.</button>
            </div>
        </div>
        
    );
}