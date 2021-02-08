import service from './service.js';
import hitsMarkup from './hits-markup.js';
import refs from './refs.js';


refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  service.query = form.elements.query.value;


  refs.gallery.innerHTML = '';
  form.reset();
  service.resetPage();
  service.fetchGallery().then(hits => {
    hitsMarkup(hits);
  });
})
refs.btnMore.addEventListener('click', () => {
  service.fetchGallery().then(hits => {
    hitsMarkup(hits);
  });
})





