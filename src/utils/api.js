const BASE_URL = 'https://opentdb.com/api.php?';

export function getCategories() {
    const endpoint = `https://opentdb.com/api_category.php`;
    return fetch(endpoint).then(res => res.json())
}

export function getTrivia(formData) {
    return fetch(`${BASE_URL}amount=${formData.amount}&difficulty=${formData.difficulty}&category=${formData.category}`).then(res => res.json());
}
