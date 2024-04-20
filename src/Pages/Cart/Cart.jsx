// // import React from 'react';
// // import style from './style.module.css';
// // import { ProductDetails } from '../product/data';
// // import { AiOutlineClose } from 'react-icons/ai';

// // export const Cart = ({ cart, setCart }) => {
// //   return (
// //     <section className={style.section}>
// //       {cart.length === 0 && (
// //         <div className={style.emptyCart}>
// //           <h2 className={style.empty}>Cart is empty</h2>
// //           <li>
// //             <a href='/product'>Shop Now</a>
// //           </li>
// //         </div>
// //       )}
// //       <div className={style.content}>
// //         {cart.map((product) => {
// //           return (
// //             <div className={style.cart} key={product.id}>
// //               <div className={style['image-container']}>
// //                 <img src={product.image} alt={product.title}></img>
// //               </div>
// //               <div className={style.detail}>
// //                 <h5>{product.title}</h5>
// //                 <p className={style.description}>
// //                   price:${product.newPrice}
// //                   <span>
// //                     <s className={style.stars}> {product.oldPrice}</s>
// //                   </span>
// //                 </p>
// //                 <div className={style.qty}>
// //                   <button className={style.addQty}>+</button>
// //                   <h4>Sub Total: {product.newPrice * product.qty}</h4>
// //                 </div>
// //                 <button>
// //                   <AiOutlineClose />
// //                 </button>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </section>
// //   );
// // };
// import React from 'react';
// import style from './style.module.css';
// import { AiOutlineClose } from 'react-icons/ai';

// export const Cart = ({ cart }) => {
//   return (
//     <section className={style.section}>
//       {cart.length === 0 && (
//         <div className={style.emptyCart}>
//           <h2 className={style.empty}>Cart is empty</h2>
//           <li>
//             <a href='/product'>Shop Now</a>
//           </li>
//         </div>
//       )}
//       <div className={style.content}>
//         {cart.map((product) => {
//           return (
//             <div className={style.cart} key={product.id}>
//               <div className={style['image-container']}>
//                 <img src={product.image} alt={product.title}></img>
//               </div>
//               <div className={style.detail}>
//                 <h5>{product.title}</h5>
//                 <p className={style.description}>
//                   Price: ${product.newPrice}
//                   <span>
//                     <s className={style.stars}> {product.oldPrice}</s>
//                   </span>
//                 </p>
//                 <div className={style.qty}>
//                   <button className={style.addQty}>+</button>
//                   <h4>Sub Total: {product.newPrice * product.qty}</h4>
//                 </div>
//                 <button>
//                   <AiOutlineClose />
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

import React from 'react';
import style from './style.module.css';
import { AiOutlineClose } from 'react-icons/ai';

export const Cart = ({ cart }) => {
  return (
    <section className={style.section}>
      {cart.length === 0 && (
        <div className={style.emptyCart}>
          <h2 className={style.empty}>Cart is empty</h2>
          <li>
            <a href='/product'>Shop Now</a>
          </li>
        </div>
      )}
      <div className={style.content}>
        {cart.map((product) => {
          return (
            <div className={style.cart} key={product.id}>
              {/* Render each product in the cart */}
              <div className={style['image-container']}>
                <img src={product.image} alt={product.title}></img>
              </div>
              <div className={style.detail}>
                <h5>{product.title}</h5>
                <p className={style.description}>
                  Price: ${product.newPrice}
                  <span>
                    <s className={style.stars}> {product.oldPrice}</s>
                  </span>
                </p>
                <div className={style.qty}>
                  <button className={style.addQty}>+</button>
                  <h4>Sub Total: {product.newPrice * product.qty}</h4>
                </div>
                <button>
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
