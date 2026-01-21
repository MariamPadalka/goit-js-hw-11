import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector("input[name='search-text']");

form.addEventListener('submit', e => {
  e.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term!',
      position: 'topRight',
      backgroundColor: '#EF4040',
      titleColor: ' #FAFAFB',
      messageColor: ' #FAFAFB',
      iconColor: ' #FAFAFB',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      hideLoader();

      if (data.hits.length === 0) {
        iziToast.info({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#EF4040',
          titleColor: ' #FAFAFB',
          messageColor: ' #FAFAFB',
          iconColor: ' #FAFAFB',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again!',
        position: 'topRight',
        backgroundColor: '#EF4040',
        titleColor: ' #FAFAFB',
        messageColor: ' #FAFAFB',
        iconColor: ' #FAFAFB',
      });
    });

  input.value = '';
});
