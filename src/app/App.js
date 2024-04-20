import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Landing } from '../Pages/Landing';
import { ProductSession } from '../Pages/product/ProductSession';
import { NotFound } from '../Pages/NotFound';
import { Cart } from '../Pages/Cart/Cart';
import { LandingHeader } from './components/Header/LandingHeader';
import { ProductDetails } from '../Pages/product/data';
import './App.css';
import { Reviews } from '../Pages/Reviews/Reviews';
import { SearchProvider } from './components/Header/SearchContext'; // Import the SearchProvider

function App() {
  const [close, setClose] = useState(true); // Define the 'close' state variable//
  const [detail, setDetail] = useState([]); // State for product detail//
  const [products, setProducts] = useState(ProductDetails); // State for products
  const [cart, setCart] = useState([]); // Initialize cart state with an empty array

  const searchInput = (query) => {
    const filteredProducts = ProductDetails.flatMap((category) =>
      category.items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    );
    setProducts(filteredProducts);
  };

  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(false); // Set close to false when opening the product detail
  };

  const addToCart = (product, qty) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      alert('This product is already added to cart');
    } else {
      setCart([...cart, { ...product, qty }]);
      alert('Product added to cart');
    }
  };

  // Define your route configuration...
  const route = createBrowserRouter([
    {
      path: '',
      element: (
        <>
          <Landing />
          <Reviews />
        </>
      ),
    },
    {
      path: '/Product',
      element: (
        <>
          <LandingHeader searchInput={searchInput} />
          <ProductSession
            products={products}
            setProducts={setProducts}
            searchInput={searchInput}
            detail={detail}
            setDetail={setDetail}
            view={view}
            close={close}
            setClose={setClose}
            addToCart={addToCart}
          />
          <Reviews />
        </>
      ),
    },
    {
      path: '/cart',
      element: (
        <>
          <LandingHeader />

          <Cart cart={cart} setCart={setCart} />
          <Reviews />
        </>
      ),
    },
    {
      path: '*',
      element: (
        <>
          <NotFound />
        </>
      ),
    },
  ]);

  return (
    <SearchProvider>
      <div>
        <RouterProvider
          router={route}
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
          products={products}
          setProducts={setProducts}
          detail={detail}
          setDetail={setDetail}
          view={view}
          close={close}
          setClose={setClose}
        />
      </div>
    </SearchProvider>
  );
}

export default App;
