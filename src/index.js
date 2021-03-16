import API from './js/apiService';
import getRefs from './js/getRefs';
import imagesTemplate from './templates/images-list.hbs';
import debounce from 'lodash.debounce';
import error from './js/pnotifyErrors';
import './sass/styles.scss';

const refs = getRefs();

function renderImagesList(images) {
    const markupImages = imagesTemplate(images);
    refs.gallery.innerHTML = markupImages;
};

function searchImages(event) {

    if (event.target.value === '') {
        return;
    };

    API.fetchImages(event.target.value)
        .then(searchImagesResult)
        .catch(error.searchError);
};

function searchImagesResult(result) {

    refs.gallery.innerHTML = '';

    console.log(result);

    if (result.total === 0) {
        throw new Error;
    };
    
    if (result.total > 0) {
        renderImagesList(result);
    };
        
};

refs.searchForm.addEventListener('input', debounce(searchImages, 500));



