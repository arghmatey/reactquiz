export function shuffleAnswers(results) {
    results.forEach(result => {
        let allAnswers = [...result.incorrect_answers, result.correct_answer]
        result.allAnswers = allAnswers.sort(() => Math.random() - 0.5)
    })
    console.log(results);
    return results;
}