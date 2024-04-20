import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);

// import './LandingHeader.css';
// import { FaTruckMoving } from 'react-icons/fa';
// import { FaShoppingBag } from 'react-icons/fa';

// import MenuIcon from '../../assets/icons/menu-icon.svg';
// import { SearchBar } from './SearchBar';
// import { BsCart } from 'react-icons/bs';
// import { useAuth0 } from '@auth0/auth0-react';
// import { AiOutlineUser } from 'react-icons/ai';
// import React, { useState } from 'react';

// export const LandingHeader = ({ searchInput }) => {
//   const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
//   const [showMenu, setMenu] = React.useState(false);
//   const toggleMenu = () => {
//     setMenu(!showMenu);
//   };

//   return (
//     <div>
//       <SearchBar searchInput={searchInput} />

//       <div className='container'>
//         <div className='shipping'>
//           <div className='truck moving-text'></div>
//           <p className='moving-text'>
//             <FaTruckMoving className='truck' /> FREE shipping within Lagos, we
//             deliver nationwide. Shopping gets easier, delivery gets faster, only
//             @ Ekia, your one-stop store.
//           </p>
//         </div>
