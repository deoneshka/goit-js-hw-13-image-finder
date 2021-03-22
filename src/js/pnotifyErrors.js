import { error, defaultModules } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

function noResult() {
    error({
        title: 'Sorry!',
        text: 'There are no such images! Try again)',
        delay: 3000
    });
};

function searchError() {
    error({
        title: 'Sorry!',
        text: 'Error, no response from service! Try again later)',
        delay: 3000
    });
};

function emptySearch() {
    error({
        title: 'Sorry!',
        text: 'You haven`t entered anything! Try again)',
        delay: 3000
    });    
}

function noMoreResult() {
    error({
        title: 'Sorry!',
        text: 'There are no more images for this request!',
        delay: 3000
    });    
}

export default { searchError, noResult, emptySearch, noMoreResult };
