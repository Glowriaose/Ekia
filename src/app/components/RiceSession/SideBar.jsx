// import style from './style.module.css';

// export const SideBar = () => {
//   return (
//     <aside className={style.sidebar}>
//       <div className={style.crop}>
//         <h4>crop</h4>
//         <ul>
//           <li>
//             <a>Camera</a>
//           </li>
//           <li>
//             <a>Camera</a>
//           </li>
//           <li>
//             <a>Camera</a>
//           </li>

//           <li>
//             <a>Camera</a>
//           </li>

//           <li>
//             <a>Camera</a>
//           </li>
//           <li>
//             <a>Camera</a>
//           </li>
//         </ul>
//       </div>
//       <div className={style.tubers}>
//         <h4>Tubbers</h4>
//         <ul>
//           <li>
//             <a>Camera</a>
//           </li>
//           <li>
//             <a>Camera</a>
//           </li>
//           <li>
//             <a>Camera</a>
//           </li>

//           <li>
//             <a>Camera</a>
//           </li>

//           <li>
//             <a>Camera</a>
//           </li>
//           <li>
//             <a>Camera</a>
//           </li>
//         </ul>
//       </div>
//     </aside>
//   );
// };
import React, { useState } from 'react';
import style from './style.module.css';

export const SideBar = () => {
  const [cropVisible, setCropVisible] = useState(false);
  const [tubersVisible, setTubersVisible] = useState(false);

  const toggleCropVisibility = () => {
    setCropVisible(!cropVisible);
  };

  const toggleTubersVisibility = () => {
    setTubersVisible(!tubersVisible);
  };

  return (
    <aside className={style.sidebar}>
      <div className={style.crop}>
        <h4 onClick={toggleCropVisibility}>crop</h4>
        {cropVisible && (
          <ul>
            <li>
              <a>Camera</a>
            </li>
            <li>
              <a>Camera</a>
            </li>
            <li>
              <a>Camera</a>
            </li>
            <li>
              <a>Camera</a>
            </li>
            <li>
              <a>Camera</a>
            </li>
            <li>
              <a>Camera</a>
            </li>
          </ul>
        )}
      </div>
      <div className={style.tubers}>
        <h4 onClick={toggleTubersVisibility}>Tubbers</h4>
        {tubersVisible && (
          <ul>
            <li>
              <a>Camera</a>
            </li>
            <li>
              <a>Camera</a>
            </li>
            <li>
              <a>Camera</a>
            </li>
            <li>
              <a>Camera</a>
            </li>
            <li>
              <a>Camera</a>
            </li>
            <li>
              <a>Camera</a>
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
};
