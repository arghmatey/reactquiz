import React, { useState } from 'react';
import * as api from '../utils/api';

const TriviaSelectForm = () => {
    const [questions, setQuestions] = useState({
        amount: 10,
        category: '',
        difficulty: 'easy'
    })

    return (
        <div>
            <button onClick={clicky}>jdlfkajhs</button>
            <form className='select-form'>
                <h2>Choose trivia</h2>
                <p></p>{categories.trivia_categories}
                <label htmlFor='category'>Select Category</label>
                <select
                    name='category'
                    id='category'
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
                />
                <label htmlFor='difficulty'>Select Difficulty</label>
                <select
                    name='difficulty'
                    id='difficulty'
                >
                    <option value='easy'>easy</option>
                    <option value='medium'>medium</option>
                    <option value='hard'>hard</option>
                </select>
                <button type='submit'>start trivia</button>
            </form>
        </div >
    )
}

export default TriviaSelectForm;