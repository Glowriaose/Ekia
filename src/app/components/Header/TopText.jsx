// import React, { useState, useEffect } from 'react';
// import { useTransition, animated } from 'react-spring';

// const slides = [
//   { id: 1, text: 'FREE shipping within Lagos' },
//   { id: 2, text: 'We delivery nation wide' },
//   {
//     id: 3,
//     text: 'shopping gets easier, delivery get faster only @ Ekia, your one stop store.',
//   },
// ];

// const SlidingText = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 3000); // Change slides every 3 seconds (adjust as needed)

//     return () => clearInterval(interval);
//   }, []);

//   const transitions = useTransition(slides[index], (item) => item.id, {
//     from: { transform: 'translateX(100%)' },
//     enter: { transform: 'translateX(0)' },
//     leave: { transform: 'translateX(-100%)' },
//     config: { duration: 1000 },
//   });

//   return (
//     <div>
//       {transitions.map(({ item, props, key }) => (
//         <animated.div key={key} style={props}>
//           <h1>{item.text}</h1>
//         </animated.div>
//       ))}
//     </div>
//   );
// };

// export default SlidingText;

import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

const slides = [
  { id: 1, text: 'FREE shipping within Lagos' },
  { id: 2, text: 'We deliver nationwide' },
  {
    id: 3,
    text: 'Shopping gets easier, delivery gets faster only @ Ekia, your one-stop store.',
  },
];

const SlidingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slides every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[index];

  const transitions = useTransition(
    currentSlide,
    (item) => (item ? item.id : null),
    {
      from: { transform: 'translateX(100%)' },
      enter: { transform: 'translateX(0)' },
      leave: { transform: 'translateX(-100%)' },
      config: { duration: 1000 },
    }
  );

  return (
    <div>
      {transitions.map(({ item, props, key }) =>
        item ? (
          <animated.div key={key} style={props}>
            <h1>{item.text}</h1>
          </animated.div>
        ) : null
      )}
    </div>
  );
};

export default SlidingText;
