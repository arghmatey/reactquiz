export function randomizeAnswers(results) {
    results.forEach(result => {
        let allAnswers = [...result.incorrect_answers, result.correct_answer]
        result.allAnswers = allAnswers.sort(() => Math.random() - 0.5)
    })
    return results;
}

export function correctAnswers(results) {
    return results.reduce((acc, val, idx) => {
        return { ...acc, [`correct-${idx}`]: val.correct_answer }
    }, {})
}