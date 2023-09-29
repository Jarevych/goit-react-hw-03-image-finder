import React from 'react';
import { fetchImages } from './api';

export class App extends React.Component {
  state = {
    query: null,
    page: 1,
    images: null,
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.searchImage.value;
    console.log(e.currentTarget.elements.searchImage.value);
    this.setState({ query: inputValue });
  };
  fetchImagesByQuery = async () => {
    try {
      const searchQuery = this.state.query;
      const images = await fetchImages(searchQuery);
      this.setState({ images: images });
      console.log(this.state.images);
    } catch (error) {}
  };
  componentDidMount() {
    // Виконуємо завантаження даних за допомогою початкового стану query
    this.fetchImagesByQuery(this.state.query);
  }
  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImagesByQuery();
    }
    console.log(this.state.images);
  }
  render() {
    const showImages =
      Array.isArray(this.state.images) && this.state.images.length;

    return (
      <div>
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSearchSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>
            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              name="searchImage"
              placeholder="Search images and photos"
            />
          </form>
        </header>
        <ul className="gallery">
          {showImages && this.state.images.map(image => (
              <li className="gallery-item" key={image.id}>
                <img src={image.webformatURL} alt={image.tags} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
