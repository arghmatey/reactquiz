import React from 'react';

const Trivia = props => {

    return (
        <div>
            {props.trivia.map((t, idx) =>
                <div key={idx}>
                    <div>{t.question}</div>
                    {t.allAnswers.map((answer, idx) =>
                        <div key={idx}>{answer}</div>
                    )}
                    <div>CORRECT: {t.correct_answer}</div>
                    <div>INCORRECT:
                    {t.incorrect_answers.map((i_a, idx) =>
                        <div key={idx}>
                            {i_a}
                        </div>)}
                    </div>
                </div>
            )}
        </div>
    )


}

export default Trivia;