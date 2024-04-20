// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { BsEye } from 'react-icons/bs';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { ProductDetails } from './data';
// import style from './style.module.css';
// import React, { useState } from 'react';

// export const ProductSession = ({ product }) => {
//   const [products, setProducts] = useState([]);

//   const filterProducts = (category) => {
//     if (category === 'All Products') {
//       setProducts(ProductDetails.flatMap((category) => category.items));
//     } else {
//       const updatedProducts =
//         ProductDetails.find((cat) => cat.category === category)?.items || [];
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
//               {ProductDetails.map((category) => (
//                 <li
//                   key={category.category}
//                   onClick={() => filterProducts(category.category)}
//                 >
//                   <a>{category.category}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* products */}
//         <div className={style['product-box']}>
//           <div className={style.list}>
//             {products.map((product) => (
//               <div
//                 className={`${style.item} ${style.stacked}`}
//                 key={product.id}
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

// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { BsEye } from 'react-icons/bs';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { ProductDetails } from './data';
// import style from './style.module.css';
// import React, { useState, useEffect } from 'react';

// export const ProductSession = ({
//   products,
//   setProducts,
//   searchInput,
//   addToCart,
// }) => {
//   // const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Set the initial products to all products in the "All Products" category
//     setProducts(ProductDetails.flatMap((category) => category.items));
//   }, []); // Empty dependency array to run only on component mount

//   const filterProducts = (category) => {
//     if (category === 'All Products') {
//       setProducts(ProductDetails.flatMap((category) => category.items));
//     } else {
//       const updatedProducts =
//         ProductDetails.find((cat) => cat.category === category)?.items || [];
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
//               {ProductDetails.map((category) => (
//                 <li
//                   key={category.category}
//                   onClick={() => filterProducts(category.category)}
//                 >
//                   <a>{category.category}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* products */}
//         <div className={style['product-box']}>
//           <div className={style.list}>
//             {products.map((product) => (
//               <div
//                 className={`${style.item} ${style.stacked}`}
//                 key={product.id}
//               >
//                 <div className={style['image-container']}>
//                   <img src={product.image} alt={product.title}></img>
//                   <div className={style.icons}>
//                     <ul>
//                       <li onClick={() => addToCart(ProductDetails)}>
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

// import React, { useEffect, useState } from 'react';
// import { useSearch } from '../../app/components/Header/SearchContext';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { BsEye } from 'react-icons/bs';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { ProductDetails } from './data';
// import style from './style.module.css';

// export const ProductSession = ({ addToCart }) => {
//   const { searchQuery } = useSearch();
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [detail, setDetail] = useState([]);

//   useEffect(() => {
//     const filtered = ProductDetails.flatMap((category) =>
//       category.items.filter((item) =>
//         item.title.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );
//     setFilteredProducts(filtered);
//   }, [searchQuery]);

//   const view = (product) => {
//     setDetail([product]); // Update the 'detail' state with the selected product
//   };

//   const filterProducts = (category) => {
//     if (category === 'All Products') {
//       setFilteredProducts(ProductDetails.flatMap((category) => category.items));
//     } else {
//       const updatedProducts =
//         ProductDetails.find((cat) => cat.category === category)?.items || [];
//       setFilteredProducts(updatedProducts);
//     }
//   };

//   return (
//     <>
//       <div className={style['product-detail']}>
//         <div className={style.container}>
//           {/* Render the 'detail' state */}
//           {detail.map((product) => {
//             return (
//               <div className={style['product-box']} key={product.id}>
//                 <div className={style['imge-box']}>
//                   <img src={product.image} alt={product.title}></img>
//                 </div>
//                 <div className={style.detail}>
//                   <h4>{product.title}</h4>
//                   <p className={style.description}>
//                     {product.newPrice}
//                     <span>
//                       <s className={style.stars}>{product.oldPrice}</s>
//                     </span>
//                   </p>
//                   <button>{product.cart}</button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <section className={style.product}>
//         <h3># products</h3>
//         <p>Home - Products</p>
//         <div className={style.container}>
//           <div className={style.filter}>
//             <div className={style.categories}>
//               <h1>Categories</h1>
//               <ul>
//                 <li onClick={() => filterProducts('All Products')}>
//                   <a>All Products</a>
//                 </li>
//                 {ProductDetails.map((category) => (
//                   <li
//                     key={category.category}
//                     onClick={() => filterProducts(category.category)}
//                   >
//                     <a>{category.category}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className={style['product-box']}>
//             <div className={style.list}>
//               {filteredProducts.map((product) => (
//                 <div
//                   className={`${style.item} ${style.stacked}`}
//                   key={product.id}
//                 >
//                   <div className={style['image-container']}>
//                     <img src={product.image} alt={product.title}></img>
//                     <div className={style.icons}>
//                       <ul>
//                         <li onClick={() => addToCart(product)}>
//                           <a href='#'>
//                             <AiOutlineShoppingCart />
//                           </a>
//                         </li>
//                         <li onClick={() => view(product)}>
//                           <a href='#'>
//                             <BsEye />
//                           </a>
//                         </li>
//                         <li>
//                           <a href='#'>
//                             <AiOutlineHeart />
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className={style['product-details']}>
//                     <h5 className={style.title}>{product.title}</h5>
//                     <p className={style.description}>
//                       {product.newPrice}
//                       <span>
//                         <s className={style.stars}>{product.oldPrice}</s>
//                       </span>
//                     </p>
//                     <button>{product.cart}</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// import React, { useEffect, useState } from 'react';
// import { useSearch } from '../../app/components/Header/SearchContext';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { BsEye } from 'react-icons/bs';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { ProductDetails } from './data';
// import style from './style.module.css';
// import { AiOutlineCloseCircle } from 'react-icons/ai';

// export const ProductSession = ({ addToCart, close, setClose }) => {
//   const { searchQuery } = useSearch();
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [detail, setDetail] = useState([]);

//   useEffect(() => {
//     const filtered = ProductDetails.flatMap((category) =>
//       category.items.filter((item) =>
//         item.title.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );
//     setFilteredProducts(filtered);
//   }, [searchQuery]);

//   const view = (productId) => {
//     const product = ProductDetails.flatMap((category) => category.items).find(
//       (item) => item.id === productId
//     );
//     if (product) {
//       setDetail([product]);
//     }
//   };

//   const filterProducts = (category) => {
//     if (category === 'All Products') {
//       setFilteredProducts(ProductDetails.flatMap((category) => category.items));
//     } else {
//       const updatedProducts =
//         ProductDetails.find((cat) => cat.category === category)?.items || [];
//       setFilteredProducts(updatedProducts);
//     }
//   };

//   return (
//     <>
//       {close ? (
//         <div className={style['product-detail']}>
//           <div className={style.container}>
//             <button onClick={setClose(false)}>
//               <AiOutlineCloseCircle />
//             </button>
//             {detail.map((product) => {
//               return (
//                 <div className={style['product-box']}>
//                   <div className={style['imge-box']}>
//                     <img src={product.image}></img>
//                   </div>
//                   <div className={style.detail}>
//                     <h4>{product.title}</h4>
//                     <p className={style.description}>
//                       {product.newPrice}
//                       <span>
//                         <s className={style.stars}>{product.oldPrice}</s>
//                       </span>
//                     </p>
//                     <button>{product.cart}</button>
//                   </div>
//                 </div>
//               );
//             })}
//             <div className={style.productBox}></div>
//           </div>
//         </div>
//       ) : null}

//       <section className={style.product}>
//         <h3># products</h3>
//         <p>Home - Products</p>
//         <div className={style.container}>
//           <div className={style.filter}>
//             <div className={style.categories}>
//               <h1>Categories</h1>
//               <ul>
//                 <li onClick={() => filterProducts('All Products')}>
//                   <a>All Products</a>
//                 </li>
//                 {ProductDetails.map((category) => (
//                   <li
//                     key={category.category}
//                     onClick={() => filterProducts(category.category)}
//                   >
//                     <a>{category.category}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className={style['product-box']}>
//             <div className={style.list}>
//               {filteredProducts.map((product) => (
//                 <div
//                   className={`${style.item} ${style.stacked}`}
//                   key={product.id}
//                 >
//                   <div className={style['image-container']}>
//                     <img src={product.image} alt={product.title}></img>
//                     <div className={style.icons}>
//                       <ul>
//                         <li onClick={() => addToCart(product)}>
//                           <a href='#'>
//                             <AiOutlineShoppingCart />
//                           </a>
//                         </li>
//                         <li onClick={() => view(product.id)}>
//                           {/* Pass the product ID to the view function */}
//                           <a href='#'>
//                             <BsEye />
//                           </a>
//                         </li>
//                         <li>
//                           <a href='#'>
//                             <AiOutlineHeart />
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className={style['product-details']}>
//                     <h5 className={style.title}>{product.title}</h5>
//                     <p className={style.description}>
//                       {product.newPrice}
//                       <span>
//                         <s className={style.stars}>{product.oldPrice}</s>
//                       </span>
//                     </p>
//                     <button>{product.cart}</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
// import React, { useEffect, useState } from 'react';
// import { useSearch } from '../../app/components/Header/SearchContext';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { BsEye } from 'react-icons/bs';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { ProductDetails } from './data';
// import style from './style.module.css';
// import { AiOutlineCloseCircle } from 'react-icons/ai';

// export const ProductSession = ({ addToCart }) => {
//   const { searchQuery } = useSearch();
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [detail, setDetail] = useState([]);
//   const [close, setClose] = useState(false); // Define the 'close' state variable

//   useEffect(() => {
//     const filtered = ProductDetails.flatMap((category) =>
//       category.items.filter((item) =>
//         item.title.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );
//     setFilteredProducts(filtered);
//   }, [searchQuery]);

//   const view = (productId) => {
//     const product = ProductDetails.flatMap((category) => category.items).find(
//       (item) => item.id === productId
//     );
//     if (product) {
//       setDetail([product]);
//       setClose(true); // Open the product detail section
//     }
//   };

//   const filterProducts = (category) => {
//     if (category === 'All Products') {
//       setFilteredProducts(ProductDetails.flatMap((category) => category.items));
//     } else {
//       const updatedProducts =
//         ProductDetails.find((cat) => cat.category === category)?.items || [];
//       setFilteredProducts(updatedProducts);
//     }
//   };

//   return (
//     <>
//       {close ? (
//         <div className={style['product-detail']}>
//           <div className={style.container}>
//             <button onClick={() => setClose(false)}>
//               {/* Correctly define the event handler */}
//               <AiOutlineCloseCircle />
//             </button>
//             {detail.map((product) => {
//               return (
//                 <div className={style['product-box']}>
//                   <div className={style['imge-box']}>
//                     <img src={product.image} alt={product.title}></img>{' '}
//                     {/* Add alt attribute for accessibility */}
//                   </div>
//                   <div className={style.detail}>
//                     <h4>{product.title}</h4>
//                     <p className={style.description}>
//                       {product.newPrice}
//                       <span>
//                         <s className={style.stars}>{product.oldPrice}</s>
//                       </span>
//                     </p>
//                     <button>{product.cart}</button>
//                   </div>
//                 </div>
//               );
//             })}
//             <div className={style.productBox}></div>
//           </div>
//         </div>
//       ) : null}

//       <section className={style.product}>
//         <h3># products</h3>
//         <p>Home - Products</p>
//         <div className={style.container}>
//           <div className={style.filter}>
//             <div className={style.categories}>
//               <h1>Categories</h1>
//               <ul>
//                 <li onClick={() => filterProducts('All Products')}>
//                   <a>All Products</a>
//                 </li>
//                 {ProductDetails.map((category) => (
//                   <li
//                     key={category.category}
//                     onClick={() => filterProducts(category.category)}
//                   >
//                     <a>{category.category}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// <<<<<<<latest>>>>>>>

// import React, { useEffect, useState } from 'react';
// import { useSearch } from '../../app/components/Header/SearchContext';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { BsEye } from 'react-icons/bs';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { ProductDetails } from './data';
// import style from './style.module.css';
// import { AiOutlineCloseCircle } from 'react-icons/ai';

// export const ProductSession = ({
//   addToCart,
//   products,
//   setProduct,
//   close,
//   setClose,
// }) => {
//   const { searchQuery } = useSearch();
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [detail, setDetail] = useState([]);

//   useEffect(() => {
//     const filtered = ProductDetails.flatMap((category) =>
//       category.items.filter((item) =>
//         item.title.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );
//     setFilteredProducts(filtered);
//   }, [searchQuery]);

//   const view = (productId) => {
//     const product = ProductDetails.flatMap((category) => category.items).find(
//       (item) => item.id === productId
//     );
//     if (product) {
//       setDetail([product]);
//     }
//   };

//   const filterProducts = (category) => {
//     if (category === 'All Products') {
//       setFilteredProducts(ProductDetails.flatMap((category) => category.items));
//     } else {
//       const updatedProducts =
//         ProductDetails.find((cat) => cat.category === category)?.items || [];
//       setFilteredProducts(updatedProducts);
//     }
//   };

//   return (
//     <>
//       {close ? (
//         <div className={style['product-detail']}>
//           <div className={style.container}>
//             <button onClick={() => setClose(false)}>
//               <AiOutlineCloseCircle />
//             </button>
//             {detail.map((product) => {
//               return (
//                 <div className={style['product-box']}>
//                   <div className={style['imge-box']}>
//                     <img src={product.image} alt={product.title} />
//                   </div>
//                   <div className={style.detail}>
//                     <h4>{product.title}</h4>
//                     <p className={style.description}>
//                       {product.newPrice}
//                       <span>
//                         <s className={style.stars}>{product.oldPrice}</s>
//                       </span>
//                     </p>
//                     <button>{product.cart}</button>
//                   </div>
//                 </div>
//               );
//             })}
//             <div className={style.productBox}></div>
//           </div>
//         </div>
//       ) : null}

//       <section className={style.product}>
//         <h3># products</h3>
//         <p>Home - Products</p>
//         <div className={style.container}>
//           <div className={style.filter}>
//             <div className={style.categories}>
//               <h1>Categories</h1>
//               <ul>
//                 <li onClick={() => filterProducts('All Products')}>
//                   <a>All Products</a>
//                 </li>
//                 {ProductDetails.map((category) => (
//                   <li
//                     key={category.category}
//                     onClick={() => filterProducts(category.category)}
//                   >
//                     <a>{category.category}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className={style['product-box']}>
//             <div className={style.list}>
//               {filteredProducts.map((product) => (
//                 <div
//                   className={`${style.item} ${style.stacked}`}
//                   key={product.id}
//                 >
//                   <div className={style['image-container']}>
//                     <img src={product.image} alt={product.title} />
//                     <div className={style.icons}>
//                       <ul>
//                         <li onClick={() => addToCart(product)}>
//                           <a href='#'>
//                             <AiOutlineShoppingCart />
//                           </a>
//                         </li>
//                         <li onClick={() => view(product.id)}>
//                           <a href='#'>
//                             <BsEye />
//                           </a>
//                         </li>
//                         <li>
//                           <a href='#'>
//                             <AiOutlineHeart />
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className={style['product-details']}>
//                     <h5 className={style.title}>{product.title}</h5>
//                     <p className={style.description}>
//                       {product.newPrice}
//                       <span>
//                         <s className={style.stars}>{product.oldPrice}</s>
//                       </span>
//                     </p>
//                     <button>{product.cart}</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
// import React, { useEffect, useState } from 'react';
// import { useSearch } from '../../app/components/Header/SearchContext';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { BsEye } from 'react-icons/bs';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { ProductDetails } from './data';
// import style from './style.module.css';
// import { AiOutlineCloseCircle } from 'react-icons/ai';

// export const ProductSession = ({
//   addToCart,
//   products,
//   setProduct,
//   close, // Receive close state as prop
//   setClose, // Receive setClose function as prop
// }) => {
//   const { searchQuery } = useSearch();
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [detail, setDetail] = useState([]);

//   useEffect(() => {
//     const filtered = ProductDetails.flatMap((category) =>
//       category.items.filter((item) =>
//         item.title.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );
//     setFilteredProducts(filtered);
//   }, [searchQuery]);

//   const view = (productId) => {
//     const product = ProductDetails.flatMap((category) => category.items).find(
//       (item) => item.id === productId
//     );
//     if (product) {
//       setDetail([product]);
//       setClose(false); // Set close to false when opening the product detail
//     }
//   };

//   const filterProducts = (category) => {
//     if (category === 'All Products') {
//       setFilteredProducts(ProductDetails.flatMap((category) => category.items));
//     } else {
//       const updatedProducts =
//         ProductDetails.find((cat) => cat.category === category)?.items || [];
//       setFilteredProducts(updatedProducts);
//     }
//   };

//   return (
//     <>
//       {/* Remove the conditional rendering of product detail section based on the close state */}
//       <div className={style['product-detail']}>
//         <div className={style.container}>
//           <button onClick={() => setClose(true)}>
//             {/* Close button */}
//             <AiOutlineCloseCircle />
//           </button>
//           {detail.map((product) => {
//             return (
//               <div className={style['product-box']}>
//                 <div className={style['imge-box']}>
//                   <img src={product.image} alt={product.title} />
//                 </div>
//                 <div className={style.detail}>
//                   <h4>{product.title}</h4>
//                   <p className={style.description}>
//                     {product.newPrice}
//                     <span>
//                       <s className={style.stars}>{product.oldPrice}</s>
//                     </span>
//                   </p>
//                   <button>{product.cart}</button>
//                 </div>
//               </div>
//             );
//           })}
//           <div className={style.productBox}></div>
//         </div>
//       </div>

//       <section className={style.product}>
//         <h3># products</h3>
//         <p>Home - Products</p>
//         <div className={style.container}>
//           <div className={style.filter}>
//             <div className={style.categories}>
//               <h1>Categories</h1>
//               <ul>
//                 <li onClick={() => filterProducts('All Products')}>
//                   <a>All Products</a>
//                 </li>
//                 {ProductDetails.map((category) => (
//                   <li
//                     key={category.category}
//                     onClick={() => filterProducts(category.category)}
//                   >
//                     <a>{category.category}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className={style['product-box']}>
//             <div className={style.list}>
//               {filteredProducts.map((product) => (
//                 <div
//                   className={`${style.item} ${style.stacked}`}
//                   key={product.id}
//                 >
//                   <div className={style['image-container']}>
//                     <img src={product.image} alt={product.title} />
//                     <div className={style.icons}>
//                       <ul>
//                         <li onClick={() => addToCart(product)}>
//                           <a href='#'>
//                             <AiOutlineShoppingCart />
//                           </a>
//                         </li>
//                         <li onClick={() => view(product.id)}>
//                           <a href='#'>
//                             <BsEye />
//                           </a>
//                         </li>
//                         <li>
//                           <a href='#'>
//                             <AiOutlineHeart />
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className={style['product-details']}>
//                     <h5 className={style.title}>{product.title}</h5>
//                     <p className={style.description}>
//                       {product.newPrice}
//                       <span>
//                         <s className={style.stars}>{product.oldPrice}</s>
//                       </span>
//                     </p>
//                     <button>{product.cart}</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
// import React, { useEffect, useState } from 'react';
// import { useSearch } from '../../app/components/Header/SearchContext';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { BsEye } from 'react-icons/bs';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { ProductDetails } from './data';
// import style from './style.module.css';
// import { AiOutlineCloseCircle } from 'react-icons/ai';

// export const ProductSession = ({
//   addToCart,
//   products,
//   setProduct,
//   close, // Receive close state as prop
//   setClose, // Receive setClose function as prop
// }) => {
//   const { searchQuery } = useSearch();
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [detail, setDetail] = useState([]);

//   useEffect(() => {
//     const filtered = ProductDetails.flatMap((category) =>
//       category.items.filter((item) =>
//         item.title.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );
//     setFilteredProducts(filtered);
//   }, [searchQuery]);

//   const view = (productId) => {
//     const product = ProductDetails.flatMap((category) => category.items).find(
//       (item) => item.id === productId
//     );
//     if (product) {
//       setDetail([product]);
//       setClose(false); // Set close to false when opening the product detail
//     }
//   };

//   const handleClose = () => {
//     setClose(true); // Set close to true when closing the product detail
//   };

//   const filterProducts = (category) => {
//     if (category === 'All Products') {
//       setFilteredProducts(ProductDetails.flatMap((category) => category.items));
//     } else {
//       const updatedProducts =
//         ProductDetails.find((cat) => cat.category === category)?.items || [];
//       setFilteredProducts(updatedProducts);
//     }
//   };

//   return (
//     <>
//       {/* Conditional rendering based on the close state */}
//       {close ? null : (
//         <div className={style['product-detail']}>
//           <div className={style.container}>
//             <button onClick={handleClose} className={style.close}>
//               {/* Close button */}
//               <AiOutlineCloseCircle />
//             </button>
//             {detail.map((product) => {
//               return (
//                 <div className={style['product-box']}>
//                   <div className={style['imge-box']}>
//                     <img src={product.image} alt={product.title} />
//                   </div>
//                   <div className={style.detail}>
//                     <h4>{product.title}</h4>
//                     <p className={style.description}>
//                       {product.newPrice}
//                       <span>
//                         <s className={style.stars}>{product.oldPrice}</s>
//                       </span>
//                     </p>
//                     <div>
//                       <button className={style.addBtn}>{product.cart}</button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//             <div className={style.productBox}></div>
//           </div>
//         </div>
//       )}

//       <section className={style.product}>
//         <h3># products</h3>
//         <p>Home - Products</p>
//         <div className={style.container}>
//           <div className={style.filter}>
//             <div className={style.categories}>
//               <h1>Categories</h1>
//               <ul>
//                 <li onClick={() => filterProducts('All Products')}>
//                   <a>All Products</a>
//                 </li>
//                 {ProductDetails.map((category) => (
//                   <li
//                     key={category.category}
//                     onClick={() => filterProducts(category.category)}
//                   >
//                     <a>{category.category}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className={style['product-box']}>
//             <div className={style.list}>
//               {filteredProducts.map((product) => (
//                 <div
//                   className={`${style.item} ${style.stacked}`}
//                   key={product.id}
//                 >
//                   <div className={style['image-container']}>
//                     <img src={product.image} alt={product.title} />
//                     <div className={style.icons}>
//                       <ul>
//                         <li onClick={() => addToCart(product)}>
//                           <a href='#'>
//                             <AiOutlineShoppingCart />
//                           </a>
//                         </li>
//                         <li onClick={() => view(product.id)}>
//                           <a href='#'>
//                             <BsEye />
//                           </a>
//                         </li>
//                         <li>
//                           <a href='#'>
//                             <AiOutlineHeart />
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className={style['product-details']}>
//                     <h5 className={style.title}>{product.title}</h5>
//                     <p className={style.description}>
//                       {product.newPrice}
//                       <span>
//                         <s className={style.stars}>{product.oldPrice}</s>
//                       </span>
//                     </p>
//                     <button>{product.cart}</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// latest for add to cart
// import React, { useEffect, useState } from 'react';
// import { useSearch } from '../../app/components/Header/SearchContext';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { BsEye } from 'react-icons/bs';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { ProductDetails } from './data';
// import style from './style.module.css';
// import { AiOutlineCloseCircle } from 'react-icons/ai';

// export const ProductSession = ({
//   addToCart,
//   products,
//   setProduct,
//   close,
//   setClose,
// }) => {
//   const { searchQuery } = useSearch();
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [detail, setDetail] = useState([]);
//   const [addedToCart, setAddedToCart] = useState(false); // State to track if an item is added to the cart

//   useEffect(() => {
//     const filtered = ProductDetails.flatMap((category) =>
//       category.items.filter((item) =>
//         item.title.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );
//     setFilteredProducts(filtered);
//   }, [searchQuery]);

//   const view = (productId) => {
//     const product = ProductDetails.flatMap((category) => category.items).find(
//       (item) => item.id === productId
//     );
//     if (product) {
//       setDetail([product]);
//       setClose(false);
//     }
//   };

//   const handleClose = () => {
//     setClose(true);
//   };

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     setAddedToCart(true); // Set addedToCart to true when item is added to the cart
//     setTimeout(() => {
//       setAddedToCart(false); // Reset addedToCart after a delay (e.g., 3 seconds)
//     }, 3000);
//   };

//   const filterProducts = (category) => {
//     if (category === 'All Products') {
//       setFilteredProducts(ProductDetails.flatMap((category) => category.items));
//     } else {
//       const updatedProducts =
//         ProductDetails.find((cat) => cat.category === category)?.items || [];
//       setFilteredProducts(updatedProducts);
//     }
//   };

//   return (
//     <>
//       {close ? null : (
//         <div className={style['product-detail']}>
//           <div className={style.container}>
//             <button onClick={handleClose} className={style.close}>
//               <AiOutlineCloseCircle />
//             </button>
//             {detail.map((product) => (
//               <div className={style['product-box']}>
//                 <div className={style['imge-box']}>
//                   <img src={product.image} alt={product.title} />
//                 </div>
//                 <div className={style.detail}>
//                   <h4>{product.title}</h4>
//                   <p className={style.description}>
//                     {product.newPrice}
//                     <span>
//                       <s className={style.stars}>{product.oldPrice}</s>
//                     </span>
//                   </p>
//                   <div>
//                     <button className={style.addBtn}>{product.cart}</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <div className={style.productBox}></div>
//           </div>
//         </div>
//       )}

//       <section className={style.product}>
//         <h3># products</h3>
//         <p>Home - Products</p>
//         <div className={style.container}>
//           <div className={style.filter}>
//             <div className={style.categories}>
//               <h1>Categories</h1>
//               <ul>
//                 <li onClick={() => filterProducts('All Products')}>
//                   <a>All Products</a>
//                 </li>
//                 {ProductDetails.map((category) => (
//                   <li
//                     key={category.category}
//                     onClick={() => filterProducts(category.category)}
//                   >
//                     <a>{category.category}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className={style['product-box']}>
//             <div className={style.list}>
//               {filteredProducts.map((product) => (
//                 <div
//                   className={`${style.item} ${style.stacked}`}
//                   key={product.id}
//                 >
//                   <div className={style['image-container']}>
//                     <img src={product.image} alt={product.title} />
//                     <div className={style.icons}>
//                       <ul>
//                         <li onClick={() => addToCart(product)}>
//                           <a href='#'>
//                             <AiOutlineShoppingCart />
//                           </a>
//                         </li>
//                         <li onClick={() => view(product.id)}>
//                           <a href='#'>
//                             <BsEye />
//                           </a>
//                         </li>
//                         <li>
//                           <a href='#'>
//                             <AiOutlineHeart />
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className={style['product-details']}>
//                     <h5 className={style.title}>{product.title}</h5>
//                     <p className={style.description}>
//                       {product.newPrice}
//                       <span>
//                         <s className={style.stars}>{product.oldPrice}</s>
//                       </span>
//                     </p>
//                     <button>{product.cart}</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Display message when item is added to cart */}
//       {addedToCart && (
//         <div className={style.cartMessage}>Product added to cart!</div>
//       )}
//     </>
//   );
// };

// ProductSession.js
// ProductSession.js

// import React, { useEffect, useState } from 'react';
// import { useSearch } from '../../app/components/Header/SearchContext';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { BsEye } from 'react-icons/bs';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { ProductDetails } from './data';
// import style from './style.module.css';
// import { AiOutlineCloseCircle } from 'react-icons/ai';

// export const ProductSession = ({
//   addToCart,
//   products,
//   setProduct,
//   close,
//   setClose,
//   cart, // Pass cart state as a prop
// }) => {
//   const { searchQuery } = useSearch();
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [detail, setDetail] = useState([]);

//   useEffect(() => {
//     const filtered = ProductDetails.flatMap((category) =>
//       category.items.filter((item) =>
//         item.title.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );
//     setFilteredProducts(filtered);
//   }, [searchQuery]);

//   const view = (productId) => {
//     const product = ProductDetails.flatMap((category) => category.items).find(
//       (item) => item.id === productId
//     );
//     if (product) {
//       setDetail([product]);
//       setClose(false);
//     }
//   };

//   const handleClose = () => {
//     setClose(true);
//   };

//   const filterProducts = (category) => {
//     if (category === 'All Products') {
//       setFilteredProducts(ProductDetails.flatMap((category) => category.items));
//     } else {
//       const updatedProducts =
//         ProductDetails.find((cat) => cat.category === category)?.items || [];
//       setFilteredProducts(updatedProducts);
//     }
//   };

//   return (
//     <>
//       {close ? null : (
//         <div className={style['product-detail']}>
//           <div className={style.container}>
//             <button onClick={handleClose} className={style.close}>
//               <AiOutlineCloseCircle />
//             </button>
//             {detail.map((product) => {
//               return (
//                 <div className={style['product-box']} key={product.id}>
//                   <div className={style['imge-box']}>
//                     <img src={product.image} alt={product.title} />
//                   </div>
//                   <div className={style.detail}>
//                     <h4>{product.title}</h4>
//                     <p className={style.description}>
//                       {product.newPrice}
//                       <span>
//                         <s className={style.stars}>{product.oldPrice}</s>
//                       </span>
//                     </p>
//                     <div>
//                       <button
//                         className={style.addBtn}
//                         onClick={() => addToCart(product, 1)}
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//             <div className={style.productBox}></div>
//           </div>
//         </div>
//       )}

//       <section className={style.product}>
//         <h3># products</h3>
//         <p>Home - Products</p>
//         <div className={style.container}>
//           <div className={style.filter}>
//             <div className={style.categories}>
//               <h1>Categories</h1>
//               <ul>
//                 <li onClick={() => filterProducts('All Products')}>
//                   <a>All Products</a>
//                 </li>
//                 {ProductDetails.map((category) => (
//                   <li
//                     key={category.category}
//                     onClick={() => filterProducts(category.category)}
//                   >
//                     <a>{category.category}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className={style['product-box']}>
//             <div className={style.list}>
//               {filteredProducts.map((product) => (
//                 <div
//                   className={`${style.item} ${style.stacked}`}
//                   key={product.id}
//                 >
//                   <div className={style['image-container']}>
//                     <img src={product.image} alt={product.title} />
//                     <div className={style.icons}>
//                       <ul>
//                         <li onClick={() => addToCart(product, 1)}>
//                           <a href='#'>
//                             <AiOutlineShoppingCart />
//                           </a>
//                         </li>
//                         <li onClick={() => view(product.id)}>
//                           <a href='#'>
//                             <BsEye />
//                           </a>
//                         </li>
//                         <li>
//                           <a href='#'>
//                             <AiOutlineHeart />
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className={style['product-details']}>
//                     <h5 className={style.title}>{product.title}</h5>
//                     <p className={style.description}>
//                       {product.newPrice}
//                       <span>
//                         <s className={style.stars}>{product.oldPrice}</s>
//                       </span>
//                     </p>
//                     <button>{product.cart}</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
import React, { useState, useEffect } from 'react';
import { useSearch } from '../../app/components/Header/SearchContext';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { ProductDetails } from './data';
import style from './style.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const ProductSession = ({
  addToCart,
  products,
  setProducts,
  detail,
  setDetail,
  close,
  setClose,
  cart, // Add cart as a prop
  setCart, // Add setCart as a prop
}) => {
  const { searchQuery } = useSearch();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = ProductDetails.flatMap((category) =>
      category.items.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  const view = (productId) => {
    const product = ProductDetails.flatMap((category) => category.items).find(
      (item) => item.id === productId
    );
    if (product) {
      setDetail([product]);
      setClose(false);
    }
  };

  const handleClose = () => {
    setClose(true);
  };

  const filterProducts = (category) => {
    if (category === 'All Products') {
      setFilteredProducts(ProductDetails.flatMap((category) => category.items));
    } else {
      const updatedProducts =
        ProductDetails.find((cat) => cat.category === category)?.items || [];
      setFilteredProducts(updatedProducts);
    }
  };

  // Updated addToCart function to add items to the cart
  const handleAddToCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      alert('This product is already added to cart');
    } else {
      // Add the product to the cart state
      setCart([...cart, { ...product, qty: 1 }]);
      alert('Product added to cart');
    }
  };

  return (
    <>
      {close ? null : (
        <div className={style['product-detail']}>
          <div className={style.container}>
            <button onClick={handleClose} className={style.close}>
              <AiOutlineCloseCircle />
            </button>
            {detail.map((product) => {
              return (
                <div className={style['product-box']}>
                  <div className={style['imge-box']}>
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className={style.detail}>
                    <h4>{product.title}</h4>
                    <p className={style.description}>
                      {product.newPrice}
                      <span>
                        <s className={style.stars}>{product.oldPrice}</s>
                      </span>
                    </p>
                    <div>
                      <button
                        className={style.addBtn}
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className={style.productBox}></div>
          </div>
        </div>
      )}

      <section className={style.product}>
        <h3># products</h3>
        <p>Home - Products</p>
        <div className={style.container}>
          <div className={style.filter}>
            <div className={style.categories}>
              <h1>Categories</h1>
              <ul>
                <li onClick={() => filterProducts('All Products')}>
                  <a>All Products</a>
                </li>
                {ProductDetails.map((category) => (
                  <li
                    key={category.category}
                    onClick={() => filterProducts(category.category)}
                  >
                    <a>{category.category}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={style['product-box']}>
            <div className={style.list}>
              {filteredProducts.map((product) => (
                <div
                  className={`${style.item} ${style.stacked}`}
                  key={product.id}
                >
                  <div className={style['image-container']}>
                    <img src={product.image} alt={product.title} />
                    <div className={style.icons}>
                      <ul>
                        <li onClick={() => handleAddToCart(product)}>
                          <AiOutlineShoppingCart />
                        </li>
                        <li onClick={() => view(product.id)}>
                          <BsEye />
                        </li>
                        <li>
                          <AiOutlineHeart />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={style['product-details']}>
                    <h5 className={style.title}>{product.title}</h5>
                    <p className={style.description}>
                      {product.newPrice}
                      <span>
                        <s className={style.stars}>{product.oldPrice}</s>
                      </span>
                    </p>
                    <button>{product.cart}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
