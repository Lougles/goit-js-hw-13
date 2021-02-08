
function fetchGallery(searchQuery, page = 1) {
  const apiKey = `20134197-bbc807323e2a93a38d1a062c9`;
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&per_page=12&page=${page}&key=${apiKey}`;
  return fetch(url)
    .then(res => res.json())
    .then(data => data.hits)
    .catch(error => console.log(error));
}

export default fetchGallery;