import React, { Component } from 'react';

class TriviaSelectForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 10,
            category: '23',
            difficulty: 'easy'
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.props.getTrivia(this.state);
        this.props.history.push('/trivia');
    }

    render() {
        return (
            <div>
                <form className='select-form' onSubmit={this.handleSubmit}>
                    <h2>Choose trivia</h2>
                    <label htmlFor='category'>Select Category</label>
                    <select
                        name='category'
                        id='category'
                        value={this.state.category}
                        onChange={this.handleChange}
                    >
                        <option value='21'>sports</option>
                        <option value='23'>history</option>
                        <option value='24'>politics</option>
                    </select>
                    <label htmlFor='amount'>How many questions?</label>
                    <input
                        type='number'
                        name='amount'
                        id='amount'
                        value={this.state.amount}
                        onChange={this.handleChange}
                    />
                    <label htmlFor='difficulty'>Select Difficulty</label>
                    <select
                        name='difficulty'
                        id='difficulty'
                        value={this.state.difficulty}
                        onChange={this.handleChange}
                    >
                        <option value='easy'>easy</option>
                        <option value='medium'>medium</option>
                        <option value='hard'>hard</option>
                    </select>
                    <button type='submit'>start trivia</button>
                </form>
            </div >)
    }
}

export default TriviaSelectForm;