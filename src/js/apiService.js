const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20697627-1a708263c5a563a5588011ca6';

const api = {
    async fetchImages(searchQuery) {
        let currentPage = 1;
        const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${currentPage}&per_page=12&key=${API_KEY}`;
        const responce = await fetch(url);
        return await responce.json();
    },
};

export default api;