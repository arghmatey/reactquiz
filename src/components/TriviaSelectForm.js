import React from 'react';

const TriviaSelectForm = () => {

    return (
        <div>
            <form className='select-form'>
                <h2>Choose trivia</h2>

                <label htmlFor='category'>Select Category</label>
                <select
                    name='category'
                    id='category'
                >
                    <option value='sports'>sports</option>
                    <option value='history'>history</option>
                    <option value='politics'>politics</option>
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
        </div>
    )
}

export default TriviaSelectForm;