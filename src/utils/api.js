export function getCategories() {
    const endpoint = `https://opentdb.com/api_category.php`;
    return fetch(endpoint, { mode: 'cors' }).then(res => res.json().then(data => console.log(data)))
}
