import React from 'react';

const Collections = () => {
  return (
    <section className="collections">
      {[...Array(5)].map((_, index) => (
        <div className="card" key={index}>
          <img
            src={process.env.PUBLIC_URL + '/assets/images/card_img.png'}
            alt={`Character ${index + 1}`}
          />
          <div className="content">
            <h3>Character {index + 1}</h3>
            <p>Lorem</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Collections;
