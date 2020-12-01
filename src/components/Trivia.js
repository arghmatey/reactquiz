import React, { Component } from 'react';

class Trivia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            submitted: {}
        }
    }

    render() {

        return (
            <div>
                {this.props.trivia.map((t, idx) =>
                    <div key={idx}>
                        <div>{t.question}</div>
                        {t.allAnswers.map((answer, i) =>
                            <div>
                                <input id={i} type='radio' name={idx} value={answer} />
                                <label htmlFor={i}>{answer}</label>
                            </div>
                        )}
                    </div>
                )}
                <button type='submit'>Check Answers</button>
            </div>
        )
    }
}

export default Trivia;