import React, { useState, useEffect } from 'react';
import Menu from "./menucard.js";
import './App.css'; 

const App = () => {
  const [menuData] = useState(Menu);

  useEffect(() => {
    const handleScroll = () => {
      const showcaseContainer = document.querySelector('.showcase-container');
      const showcaseElements = document.querySelectorAll('.showcase');

      if (showcaseContainer && showcaseElements) {
        const scrollPosition = showcaseContainer.scrollTop + showcaseContainer.offsetHeight / 2;

        showcaseElements.forEach((element) => {
          if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
            element.classList.add('highlighted');
          } else {
            element.classList.remove('highlighted');
          }
        });
      }
    };

    const showcaseContainer = document.querySelector('.showcase-container');
    if (showcaseContainer) {
      showcaseContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (showcaseContainer) {
        showcaseContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className='container'>
      <div className="showcase-container">
        {menuData.map((curElem, index) => (
          <div key={index} className="showcase">
            <div className="content">
              <section className="case-study">Case Study</section>
              <section>Adidas</section>
              <section>Scores the perfect digital landing in UAE</section>
              <section>Results</section>
              <div className="ResultDiv"></div>
              <div className="button"><button>View Case Study</button></div>
            </div>
            <div className="image"><img src={curElem.image} alt="" /></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
