import cardsTmpl from '../templates/cards.hbs';
import refs from './refs.js';

function hitsMarkup(hits) {
      const markUP = cardsTmpl(hits);
      refs.gallery.insertAdjacentHTML('beforeend', markUP);
}

export default hitsMarkup;