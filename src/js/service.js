const apiKey = `20134197-bbc807323e2a93a38d1a062c9`;



export default {
  searchQuery: '',
  page : 1,
  fetchGallery() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&per_page=12&page=${this.page}&key=${apiKey}`;
    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};