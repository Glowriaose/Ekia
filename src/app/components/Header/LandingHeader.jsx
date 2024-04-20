// import './LandingHeader.css';
// import { FaTruckMoving } from 'react-icons/fa';
// import React from 'react';
// import { Logo } from '../Logo/Logo';
// import MenuIcon from '../../assets/icons/menu-icon.svg';
// import { SearchBar } from './SearchBar';
// import { BsCart } from 'react-icons/bs';
// import { useAuth0 } from '@auth0/auth0-react';
// import { AiOutlineUser } from 'react-icons/ai';
// import SlidingText from './TopText';

// export const LandingHeader = () => {
//   const [showMenu, setMenu] = React.useState(false);

//   const toggleMenu = () => {
//     //  setMenu(showMenu === false)
//     if (showMenu === false) {
//       setMenu(true);
//     } else {
//       setMenu(false);
//     }
//   };

//   return (
//     <div className='container'>
//       <div className='shipping'>
//         <div className='truck'>
//           <FaTruckMoving className='truck' />
//         </div>
//         <p>
//           FREE shipping with lagos state, we delivery nation wide, shopping gets
//           easir, delivery gets faster, only at ekia, your one stop store.
//         </p>
//       </div>
//       <div className=''></div>

//       <header className='header'>
//         <div className='shipping'></div>
//         <div className='logo'>
//           <Logo useWhite={true} />
//         </div>
//         <img
//           className='menu-icon'
//           src={MenuIcon}
//           onClick={toggleMenu}
//           fill='white'
//         />
//         <SearchBar />
//         <div className='menu'>
//           <HeaderNavigation className={showMenu ? 'mobile' : ''} />
//         </div>
//       </header>
//     </div>
//   );
// };

// const HeaderNavigation = (props) => {
//   const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
//   return (
//     <div>
//       <ul className={props.className}>
//         <li>
//           <a href='/Home'>Home</a>
//         </li>
//         <li>
//           <a href='/Product'>Products</a>
//         </li>

//         <li className='hidden-mobile'>
//           <a href='/cart'>
//             <BsCart fill='white' fontSize={26} />
//           </a>
//         </li>
//         <li>
//           <a href='/checkout'>CheckOut</a>
//         </li>
//         {isAuthenticated && (
//           <li className='user'>
//             <AiOutlineUser />
//             <a>Hello, {user.name}</a>
//           </li>
//         )}

//         {isAuthenticated ? (
//           <li className='auth'>
//             <button
//               onClick={() =>
//                 logout({ logoutParams: { returnTo: window.location.origin } })
//               }
//             >
//               <a>Log Out</a>
//             </button>
//           </li>
//         ) : (
//           <li className='auth'>
//             <button onClick={() => loginWithRedirect()}>
//               <a>Log In</a>
//             </button>
//           </li>
//         )}
//       </ul>
//     </div>
//   );
// };

import './LandingHeader.css';
import { FaTruckMoving } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import MenuIcon from '../../assets/icons/menu-icon.svg';
import { SearchBar } from './SearchBar';
import { Logo } from '../Logo/Logo';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import { BsCart } from 'react-icons/bs';

export const LandingHeader = ({ searchInput }) => {
  const [showMenu, setMenu] = React.useState(false);
  const toggleMenu = () => {
    setMenu(!showMenu);
  };

  return (
    <div className='container'>
      <div className='shipping'>
        <p className='moving-text'>
          <FaTruckMoving className='truck' /> FREE shipping within Lagos, we
          deliver nationwide. Shopping gets easier, delivery gets faster, only @
          Ekia, your one-stop store.
        </p>
      </div>

      <header className='header'>
        <div className='logo'>
          <Logo />
        </div>

        <img
          className='menu-icon'
          src={MenuIcon}
          onClick={toggleMenu}
          fill='black'
        />
        <SearchBar searchInput={searchInput} />
        <div className='menu'>
          <HeaderNavigation className={showMenu ? 'mobile' : ''} />
        </div>
      </header>
    </div>
  );
};

const HeaderNavigation = (props) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <div>
      <ul className={props.className}>
        <li>
          <a href='/LandingHeader'>Home</a>
        </li>
        <li>
          <a href='/Product'>Products</a>
        </li>

        <li className='hidden-mobile'>
          <a href='/cart'>
            <BsCart fill=' #ed6112' fontSize={26} />
          </a>
        </li>
        <li>
          <a href='/checkout'>CheckOut</a>
        </li>
        {isAuthenticated && (
          <li className='user'>
            <a>Hello, {user.name}</a>
          </li>
        )}

        {isAuthenticated ? (
          <li className='auth'>
            <button
              className='auth'
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              <a>Log Out</a>
            </button>
          </li>
        ) : (
          <li className='auth'>
            <button onClick={() => loginWithRedirect()} className='auth'>
              <a>Log In</a>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
