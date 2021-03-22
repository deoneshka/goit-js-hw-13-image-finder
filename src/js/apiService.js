import error from './pnotifyErrors';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20697627-1a708263c5a563a5588011ca6';

export default class API {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
      try {
          const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&per_page=12&page=${this.page}`;
          const response = await fetch(url);
          const result = await response.json();
          this.incrementPage();
          return result;
      } catch {
          return error.searchError();
      };
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
};