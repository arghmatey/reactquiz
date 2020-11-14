const BASE_URL = 'https://opentdb.com/api.php?';

export function getCategories() {
    const endpoint = `https://opentdb.com/api_category.php`;
    return fetch(endpoint).then(res => res.json())
}

export function getTrivia(formData) {
    console.log(`${BASE_URL}amount=${formData.amount}&category=${formData.category}&difficulty=${formData.difficulty}`);
    return fetch(`${BASE_URL}amount=${formData.amount}&category=${formData.category}&difficulty=${formData.difficulty}`).then(res => res.json()).catch((error) => {
        console.error('Error:', error);
    })
};
