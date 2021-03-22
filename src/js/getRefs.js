export default function getRefs() {
    return {
        searchForm: document.querySelector('#search-form'),
        gallery: document.querySelector('.gallery'),
        loadMoreBtn: document.querySelector('button'),
        observer: document.querySelector('.last-item-observer'),
    };
};