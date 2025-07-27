import React from 'react';

const Description = () => {
  return (
    <section className="description">
      <div className="description_img">
        <img
          src={process.env.PUBLIC_URL + '/assets/images/img.png'}
          alt="Description"
        />
      </div>
      <div className="description_content">
        <p>
          We are a team of digital aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit.
        </p>
      </div>
      <div className="description_links">
        <a href="#twitter">Follow us on Twitter</a>
        <a href="#discord">Join us on Discord</a>
      </div>
    </section>
  );
};

export default Description;
