import API from './js/apiService';
import getRefs from './js/getRefs';
import imagesTemplate from './templates/images-list.hbs';
import error from './js/pnotifyErrors';
import './sass/styles.scss';

const refs = getRefs();
const apiService = new API();

function renderImagesList(images) {
    if (images === undefined) {
        refs.loadMoreBtn.setAttribute('hidden', '');
        return;
    };

    if (images.hits.length === 0 && images.total > 1) {
        return error.noMoreResult();
    };

    if (images.total === 0) {
        refs.loadMoreBtn.setAttribute('hidden', '');
        return error.noResult();
    };

    refs.gallery.insertAdjacentHTML('beforeend', imagesTemplate(images));
    refs.loadMoreBtn.removeAttribute('hidden');
};

function clearGallery() {
    refs.gallery.innerHTML = '';
};

function scrollElements() {
    const scrollHeight = Math.max(
        document.body.scrollHeight, refs.gallery.scrollHeight,
        document.body.offsetHeight, refs.gallery.offsetHeight,
        document.body.clientHeight, refs.gallery.clientHeight);
    
    setTimeout(() => {
        window.scrollTo({
            top: scrollHeight,
            behavior: 'smooth',
        });
    }, 500);
};

async function searchImages(event) {
    event.preventDefault();

    if (event.currentTarget.elements.query.value === '') {
        return error.emptySearch();
    };

    clearGallery();
    apiService.query = event.currentTarget.elements.query.value;
    apiService.resetPage();
    const result = await apiService.fetchImages();
    return renderImagesList(result);
};

async function loadMore() {
    const result = await apiService.fetchImages();
    scrollElements();
    return renderImagesList(result);
};

refs.searchForm.addEventListener('submit', searchImages);
refs.loadMoreBtn.addEventListener('click', loadMore);




