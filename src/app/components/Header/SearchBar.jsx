// import Search from '../../assets/icons/search.svg';
// import React, { useState } from 'react';
// import './LandingHeader.css';
// export const SearchBar = (props) => {
//   const [searchField, setSearch] = useState('');

//   return (
//     <div className='section2'>
//       <input
//         className='search-bar'
//         type='text'
//         placeholder='Search'
//         value={searchField}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <button
//         className='search-icon'
//         onClick={() => props.searchInput(searchField)}
//       >
//         <img className='button-search' src={Search} alt='Search' />
//         <div className='tooltip'>Search</div>
//       </button>
//     </div>
//   );
// };

// import React from 'react';
// import { useSearch } from './SearchContext'; // Import useSearch hook

// import Search from '../../assets/icons/search.svg';
// import './LandingHeader.css';

// export const SearchBar = () => {
//   const { searchQuery, setSearchQuery } = useSearch(); // Use the useSearch hook to access the global search state

//   const handleSearchInputChange = (e) => {
//     setSearchQuery(e.target.value); // Update the global search query
//   };

//   const handleSearchButtonClick = () => {
//     // You can perform any search related actions here if needed
//     console.log('Search button clicked');
//   };

//   return (
//     <div className='section2'>
//       <input
//         className='search-bar'
//         type='text'
//         placeholder='Search'
//         value={searchQuery}
//         onChange={handleSearchInputChange} // Call the handleSearchInputChange function on input change
//       />
//       {/* Call the handleSearchButtonClick function when the button is clicked */}
//       <button className='search-icon' onClick={handleSearchButtonClick}>
//         <img className='button-search' src={Search} alt='Search' />
//         <div className='tooltip'>Search</div>
//       </button>
//     </div>
//   );
// };

// import React from 'react';
// import { useSearch } from './SearchContext'; // Import useSearch hook

// import Search from '../../assets/icons/search.svg';
// import './LandingHeader.css';

// export const SearchBar = () => {
//   const { searchQuery, setSearchQuery } = useSearch(); // Use the useSearch hook to access the global search state

//   const handleSearchInputChange = (e) => {
//     setSearchQuery(e.target.value); // Update the global search query
//   };

//   const handleSearchButtonClick = () => {
//     // You can perform any search related actions here if needed
//     console.log('Search button clicked');
//   };

//   return (
//     <div className='section2'>
//       <input
//         className='search-bar'
//         type='text'
//         placeholder='Search'
//         value={searchQuery}
//         onChange={handleSearchInputChange} // Call the handleSearchInputChange function on input change
//       />
//       {/* Call the handleSearchButtonClick function when the button is clicked */}
//       <button className='search-icon' onClick={handleSearchButtonClick}>
//         <img className='button-search' src={Search} alt='Search' />
//         <div className='tooltip'>Search</div>
//       </button>
//     </div>
//   );
// };

import React from 'react';
import { useSearch } from './SearchContext'; // Import useSearch hook
import Search from '../../assets/icons/search.svg';
import './LandingHeader.css';
export const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useSearch(); // Use the useSearch hook to access the global search state

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value); // Update the global search query
  };

  const handleSearchButtonClick = () => {
    console.log('Search button clicked');
  };

  return (
    <div>
      <div className='section2'>
        <input
          className='search-bar'
          type='text'
          placeholder='search your products'
          value={searchQuery}
          onChange={handleSearchInputChange} // Call the handleSearchInputChange function on input change
        />
        {/* Call the handleSearchButtonClick function when the button is clicked */}
        <button className='search-icon' onClick={handleSearchButtonClick}>
          <img src={Search} />
        </button>
      </div>
    </div>
  );
};
