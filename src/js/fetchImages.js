export const fetchImages = async (inputValue, pageNr) => {
    return await fetch (
        `https://pixabay.com/api/?key=35927558-9e8084c34f45b7ac0ac0ad9f0&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
    )
    .then(async response => {
        if (!response.ok) {
            if (response.status === 404) {
                return [];
            }
            throw new Error(response.status);
        }
        return await response.json();
    })
    .catch(error => {
        console.error(error);
    });
};