import React, { Component } from 'react';

class Trivia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            submitted: {},
            correct: 0
        }
    }

    handleChange = e => {
        this.setState({ submitted: { ...this.state.submitted, [e.target.name]: e.target.value } });
    }

    handleSubmit = e => {
        e.preventDefault();
        for (const key in this.state.submitted) {
            if (this.state.submitted[key] === this.props.correctAnswers[key]) {
                this.setState({ correct: this.state.correct + 1 })
            } else {
                return
            }
        }
    }

    render() {

        return (
            <div>
                {this.props.trivia.map((t, idx) =>
                    <div key={idx}>
                        <div>{t.question}</div>
                        {t.allAnswers.map((answer, i) =>
                            <div key={i}>
                                <input id={`${idx}-${i}`} type='radio' name={idx} value={answer} onChange={this.handleChange} />
                                <label htmlFor={i}>{answer}</label>
                            </div>
                        )}
                    </div>
                )}
                <button type='submit' onClick={this.handleSubmit}>Check Answers</button>
            </div>
        )
    }
}

export default Trivia;