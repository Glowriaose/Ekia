// import React, { useRef, useEffect } from 'react';
// import './SlidingImages.css';
// import FemaleBlouse from '../../assets/images/intro-wear.png';
// import Vintage from '../../assets/images/vintage.png';
// import Jeggas from '../../assets/images/jegas.png';
// import MaleShirt from '../../assets/images/male-shirt.png';
// import BlackGown from '../../assets/images/black-gown.png';

// const SlidingImages = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     let slideIndex = 0;
//     let slideInterval;

//     const slideImages = () => {
//       const images = container.querySelectorAll('.slide');
//       const totalImages = images.length;

//       images.forEach((image) => {
//         image.style.display = 'none';
//       });

//       // Show the current image
//       images[slideIndex].style.display = 'block';

//       // Move to the next image
//       slideIndex = (slideIndex + 1) % totalImages;
//     };

//     slideImages(); // Show the first image

//     // Start sliding images
//     slideInterval = setInterval(slideImages, 3000); // Change 3000 to adjust slide speed

//     // Cleanup function
//     return () => clearInterval(slideInterval);
//   }, []);

//   return (
//     <div className='image-container' ref={containerRef}>
//       <img src={FemaleBlouse} alt='Image 1' className='slide' />
//       <img src={Vintage} alt='Image 2' className='slide' />
//       <img src={Jeggas} alt='Image 3' className='slide' />
//       <img src={BlackGown} alt='Image 4' className='slide' />
//       <img src={MaleShirt} alt='Image 5' className='slide' />
//     </div>
//   );
// };

// export default SlidingImages;
