

import { Card } from "./Card";
import cards from "../data.json"
import { useState } from "react";
export function Set() {

    const [step, setStep] = useState(0);
    const handleNext = () => {
        if (step < cards.length - 1) {
            setStep(step + 1);

        }

    }

    const handlePrev = () => {
        if (step > 0) {
            setStep(step - 1);
        }

    }


    return (
        <div>
            <h2>название набора</h2>
            <Card front={cards[step].front} back={cards[step].back}key = {cards[step].id} />
            

            <div className="controls">
                <button
                 onClick={handlePrev}
                 disabled ={step == 0 ? true : false}> 
                 
                 назад </button>
                <p>{step + 1} / {cards.length}</p>
                <button onClick={handleNext}
                disabled ={step == cards.length - 1 ? true: false}
                >вперед</button>
            </div>
        </div>
    );
}