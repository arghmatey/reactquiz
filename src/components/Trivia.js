import React, { Component } from 'react';

class Trivia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            submitted: {}
        }
    }

    handleChange = e => {
        this.setState({ submitted: { ...this.state.submitted, [e.target.name]: e.target.value } });
    }

    handleAnswerCheck = e => {
        e.preventDefault();
        let correct = 0;
        for (const key in this.state.submitted) {
            if (this.state.submitted[key] === this.props.correctAnswers[key]) {
                correct++
            } else {
                console.log('wrong')
            }
        }
        this.props.handleScore(correct);
        this.props.history.push('/results');
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
                <button type='submit' onClick={this.handleAnswerCheck}>Check Answers</button>
            </div>
        )
    }
}

export default Trivia;