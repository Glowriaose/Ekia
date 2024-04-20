export const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>404</h1>
    </div>
  );
};
// import ManShirt from '../../app/assets/images/male-shirt.png';
// import FemaleGown from '../../app/assets/images/femela-gown.png';
// import TShirt from '../../app/assets//images/tatoo.png';
// import BlackGown from '../../app/assets/images/black-gown.png';
// import Vintage from '../../app/assets/images/vintage.png';
// import Jeggas from '../../app/assets/images/jegas.png';
// import Dking from '../../app/assets/images/coffe-shirt.png';
// import Eclipse from '../../app/assets/images/eclipse1.png';
// // import Rice from '../../assets/images/Rice.png';

// export const ProductDetails = [
//   {
//     id: 1,
//     image: ManShirt,
//     title: 'London Coat',
//     newPrice: '$5',
//     picture: Eclipse,
//     oldPrice: '$10',
//     cart: 'Add to Cart',
//   },

//   {
//     image: FemaleGown,
//     title: 'Coofandy 2 pieces',
//     newPrice: '$5',
//     img: Eclipse,
//     oldPrice: '$10',
//     cart: 'Add to Cart',
//   },

//   {
//     image: TShirt,
//     title: 'T shirt and Short',
//     newPrice: '$20',
//     img: Eclipse,
//     oldPrice: '$20',
//     cart: 'Add to Cart',
//   },

//   {
//     image: BlackGown,
//     title: 'Premium 2 Piece',
//     newPrice: '$5',
//     img: Eclipse,
//     oldPrice: '$10',
//     cart: 'Add to Cart',
//   },

//   {
//     image: Vintage,
//     title: 'Premium Coat',
//     newPrice: '$10',
//     img: Eclipse,
//     oldPrice: '$20',
//     cart: 'Add to Cart',
//   },

//   {
//     image: Jeggas,
//     title: 'Art Print T shirt',
//     newPrice: '$10',
//     img: Eclipse,
//     oldPrice: '$20',
//     cart: 'Add to Cart',
//   },

//   {
//     image: Dking,
//     title: 'D king shirt',
//     newPrice: '$5',
//     img: Eclipse,
//     oldPrice: '$10',
//     cart: 'Add to Cart',
//   },
// ];

// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { BsEye } from 'react-icons/bs';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { ProductDetails } from './data';
// import style from './style.module.css';
// import React, { useState } from 'react';

// export const ProductSession = () => {
//   const { product, setProducts } = useState(ProductDetails);
//   const filtterproduct = (product) => {
//     const update = ProductDetails.filtter((x) => {
//       return x.title === product;
//     });
//     setProducts(update);
//     const Allproducts = () => {
//       setProducts(ProductDetails);
//     };
//   };
//   return (
//     <section className={style.product}>
//       <h3># products</h3>
//       <p>Home - Products</p>
//       <div className={style.container}>
//         <div className={style.filter}>
//           <div className={style.categories}>
//             <h1>Categories</h1>
//             <ul>
//               <li onClick={() => Allproducts('All Products')}>
//                 <a>All Products</a>
//               </li>
//               <li onClick={() => filtterproduct('unisex')}>
//                 <a>unisex</a>
//               </li>
//               <li onClick={() => filtterproduct('Women wear')}>
//                 <a>Women Wear</a>
//               </li>

//               <li onClick={() => filtterproduct('Childrens wear')}>
//                 <a>Children Wear</a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* products */}
//         <div className={style['product-box']}>
//           <div className={style.list}>
//             {product.map((products) => (
//               <div className={`${style.item} ${style.stacked}`}>
//                 <div className={style['image-container']}>
//                   <img src={products.image}></img>
//                   <div className={style.icons}>
//                     <ul>
//                       <li>
//                         <a href='#'>
//                           <AiOutlineShoppingCart />
//                         </a>
//                       </li>

//                       <li>
//                         <a href='#'>
//                           <BsEye />
//                         </a>
//                       </li>
//                       <li>
//                         <a href='#'>
//                           <AiOutlineHeart />
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className={style['product-details']}>
//                   <h5 className={style.title}>{products.title}</h5>
//                   <p className={style.description}>
//                     {products.newPrice}
//                     <span>
//                       <s className={style.stars}> {products.oldPrice}</s>
//                     </span>
//                   </p>
//                   <button>{products.cart}</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { BsEye } from 'react-icons/bs';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { ProductDetails } from './data';
// import style from './style.module.css';
// import React, { useState } from 'react';

// export const ProductSession = () => {
//   const [products, setProducts] = useState(ProductDetails);

//   const filterProducts = (category) => {
//     if (category === 'All Products') {
//       setProducts(ProductDetails);
//     } else {
//       const updatedProducts = ProductDetails.filter(
//         (product) => product.title === category
//       );
//       setProducts(updatedProducts);
//     }
//   };

//   return (
//     <section className={style.product}>
//       <h3># products</h3>
//       <p>Home - Products</p>
//       <div className={style.container}>
//         <div className={style.filter}>
//           <div className={style.categories}>
//             <h1>Categories</h1>
//             <ul>
//               <li onClick={() => filterProducts('All Products')}>
//                 <a>All Products</a>
//               </li>
//               <li onClick={() => filterProducts('Coofandy 2 pieces')}>
//                 <a>Unisex</a>
//               </li>
//               <li onClick={() => filterProducts('London Coat')}>
//                 <a>Women Wear</a>
//               </li>
//               <li onClick={() => filterProducts('T shirt and Short')}>
//                 <a>Children Wear</a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* products */}
//         <div className={style['product-box']}>
//           <div className={style.list}>
//             {products.map((product) => (
//               <div
//                 className={`${style.item} ${style.stacked}`}
//                 key={product.title}
//               >
//                 <div className={style['image-container']}>
//                   <img src={product.image} alt={product.title}></img>
//                   <div className={style.icons}>
//                     <ul>
//                       <li>
//                         <a href='#'>
//                           <AiOutlineShoppingCart />
//                         </a>
//                       </li>
//                       <li>
//                         <a href='#'>
//                           <BsEye />
//                         </a>
//                       </li>
//                       <li>
//                         <a href='#'>
//                           <AiOutlineHeart />
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className={style['product-details']}>
//                   <h5 className={style.title}>{product.title}</h5>
//                   <p className={style.description}>
//                     {product.newPrice}
//                     <span>
//                       <s className={style.stars}>{product.oldPrice}</s>
//                     </span>
//                   </p>
//                   <button>{product.cart}</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
