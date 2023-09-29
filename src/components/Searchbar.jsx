// // SearchBar.js
// import React from 'react';

// const SearchBar = ({ onQueryChange, onSearch, query }) => {
//   const handleInput = (e) => {
//     const value = e.currentTarget.value;
//     onQueryChange(value); // Оновлюємо стан query в компоненті App
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(); // Викликаємо функцію пошуку, яку визначаєте в компоненті App
//   };

//   return (
//     <header className="searchbar">
//       <form className="form" onSubmit={handleSubmit}>
//         <button type="submit" className="button">
//           <span className="button-label">Search</span>
//         </button>
//         <input
//           className="input"
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           value={query}
//           onChange={handleInput}
//         />
//       </form>
//     </header>
//   );
// };

// export default SearchBar;
