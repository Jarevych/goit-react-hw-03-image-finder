import React from 'react';

import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

const API_KEY =
  'https://pixabay.com/api/?q=`{query}`&page=1&key=37960657-3cfa1dcb3808e6e9b644b5e90&image_type=photo&orientation=horizontal&per_page=12';

export class App extends React.Component {
  state = {
    page: [],
    query: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      fetch();
    }
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ImageGallery />
        <Button />
      </div>
    );
  }
}
