// import React, { useRef } from 'react';

// import DiseaseCard from './DiseaseCard'
// import './disease.css';
// function Disease() {
//   const containerRef = useRef(null);

//   const scrollLeft = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollBy({
//         top: 0,
//         left: -200, // Adjust the scroll distance as needed
//         behavior: 'smooth',
//       });
//     }
//   };

//   const scrollRight = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollBy({
//         top: 0,
//         left: 200, // Adjust the scroll distance as needed
//         behavior: 'smooth',
//       });
//     }
//   };
//   return (
//     <div className='disease'>
//             <div className="scroll-arrow left-arrow" onClick={scrollLeft}>
//         &lt;
//       </div>
//       <div className="disease-container" ref={containerRef}>

//         <DiseaseCard/>
//         <DiseaseCard/>
//         <DiseaseCard/>
//         <DiseaseCard/>
//         </div>
//         <div className="scroll-arrow right-arrow" onClick={scrollRight}>
//         &gt;
//       </div>
//     </div>
//   )
// }

// export default Disease

// import React, { useRef } from 'react';
// import DiseaseCard from './DiseaseCard';
// import Left from "../../assets/left.png";
// import Right from "../../assets/right.png";
// import './disease.css';

// function Disease() {
//   const containerRef = useRef(null);

//   const scrollLeft = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollBy({
//         top: 0,
//         left: -400, // Adjust the scroll distance as needed
//         behavior: 'smooth',
//       });
//     }
//   };

//   const scrollRight = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollBy({
//         top: 0,
//         left: 400, // Adjust the scroll distance as needed
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className='disease'>
//       <div className="disease-container" ref={containerRef}>
//         {/* <DiseaseCard />
//         <DiseaseCard />
//         <DiseaseCard />
//         <DiseaseCard /> */}
//                 {[1, 2, 3, 4].map((index) => (
//           <DiseaseCard key={index} isFocused={index === 1} />
//         ))}
//       </div>
//       <div className='scroll-arrow'>
//         <p onClick={scrollLeft}><img src={Left}/> </p>
//         <p onClick={scrollRight}><img src={Right}/> </p>
//       </div>
//     </div>
//   );
// }

// export default Disease;

import React, { useRef, useState, useEffect } from 'react';
import DiseaseCard from './DiseaseCard';
import Left from "../../assets/left.png";
import Right from "../../assets/right.png";
import './disease.css';

function Disease() {
  const containerRef = useRef(null);
  const [focusedCard, setFocusedCard] = useState(0);

  const scrollLeft = () => {
    if (focusedCard > 0) {
      setFocusedCard(focusedCard - 1);
    }
  };

  const scrollRight = () => {
    if (focusedCard < 3) {
      setFocusedCard(focusedCard + 1);
    }
  };

  // Update focused card when scrolling
  const handleScroll = () => {
    const element = containerRef.current;
    if (element) {
      const { scrollLeft, clientWidth, scrollWidth } = element;
      const cardWidth = scrollWidth / 4; // Assuming 4 cards in the container
      const newFocusedCard = Math.floor(scrollLeft / cardWidth);
      setFocusedCard(newFocusedCard);
    }
  };

  useEffect(() => {
    const element = containerRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
      return () => {
        element.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className='disease'>
      <div className="disease-container" ref={containerRef}>
        {[1, 2, 3, 4].map((index) => (
          <DiseaseCard
            key={index}
            isFocused={index === focusedCard}
          />
        ))}
      </div>
      <div className='scroll-arrow'>
        <p onClick={scrollLeft}><img src={Left} alt="Left Arrow" /></p>
        <p onClick={scrollRight}><img src={Right} alt="Right Arrow" /></p>
      </div>
    </div>
  );
}

export default Disease;

