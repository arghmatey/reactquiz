import React from 'react';

const Trivia = props => {


    return (
        <div>
            <div>{props.correct}/{props.trivia.length}</div>
            {props.trivia.map((t, idx) =>
                <div key={idx}>
                    <div>{t.question}</div>
                    <div>{t.correct_answer}</div>
                    {t.allAnswers.map((answer, idx) =>
                        <button key={idx} onClick={() => props.checkAnswer(answer === t.correct_answer)}>{answer}</button>
                    )}
                </div>
            )}
        </div>
    )


}

export default Trivia;