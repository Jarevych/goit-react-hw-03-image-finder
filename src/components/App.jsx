import React from 'react';
import { StyledAppContainer } from './App.styled';
import { fetchImages } from './api';
import { Dna } from 'react-loader-spinner';
import Modal from './Modal';

export class App extends React.Component {
  state = {
    query: null,
    page: 1,
    images: null,
    isLoading: false,
    loadMore: false,
    selectedImageUrl: null,
    selectedImageTag: null,
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.searchImage.value;
    if (inputValue) {
      this.setState({ query: inputValue, images: null, page: 1 });
      e.currentTarget.reset();
    }
  };

  handleLoadMore = async e => {
    e.preventDefault();
    try {
      console.log(this.state.page);
      const nextPage = this.state.page + 1;
      await this.setState({ page: nextPage }, async () => {});
    } catch (error) {}
  };

  fetchImagesByQuery = async () => {
    try {
      this.setState({ loadMore: false });
      this.setState({ isLoading: true });
      const searchQuery = this.state.query;
      const page = this.state.page;
      const { hits } = await fetchImages(searchQuery, page);

      this.setState(prevState => ({
        images: prevState.images ? [...prevState.images, ...hits] : hits,
      }));

      console.log(this.state.images);
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
      this.setState({ loadMore: true });
    }
  };
  componentDidUpdate(_, prevState) {
    if (
      this.state.page !== prevState.page ||
      prevState.query !== this.state.query
    ) {
      this.fetchImagesByQuery();
    }
    console.log(this.state.images);
  }

  openFullSize = (imageUrl, imageTag) => {
    this.setState({ selectedImageUrl: imageUrl, selectedImageTag: imageTag });
  };
  handleCloseModal = () => {
    this.setState({ selectedImageUrl: null });
  };

  render() {
    const showImages =
      Array.isArray(this.state.images) && this.state.images.length;

    return (
      <StyledAppContainer>
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
        {this.state.isLoading && (
          <div className="spinner">
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        )}
        <ul className="gallery">
          {showImages &&
            this.state.images.map(image => (
              <li className="gallery-item" key={image.id}>
                <img
                  src={image.webformatURL}
                  alt={image.tags}
                  onClick={() =>
                    this.openFullSize(image.largeImageURL, image.tags)
                  }
                />
              </li>
            ))}
        </ul>
        {this.state.loadMore && (
          <button
            className="loadbtn"
            type="button"
            onClick={this.handleLoadMore}
          >
            Load More
          </button>
        )}
        {this.state.selectedImageUrl && (
          <Modal
            imageUrl={this.state.selectedImageUrl}
            imageTag={this.state.selectedImageTag}
            onClose={this.handleCloseModal}
          />
        )}
      </StyledAppContainer>
    );
  }
}
