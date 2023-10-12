import React, { useState } from 'react';
// import lesson1 from '../assets/mls.pdf';

function Test(props) {
  const [show, setShow] = useState(false);

  const ShowBch = () => {
    setShow(!show);
  }

  return (
    <section className='vault-section'>
      <div className="courses-available">
        <div className="each">
          <button onClick={ShowBch}>{props.label}</button>
          {show && (
            <div className="slides">
              {/* Use props to dynamically generate anchor tags */}
              {props.links.map((link, index) => (
                <a key={index}
                 href={link.file}
                 download={props.downloadable ?link.filename : undefined}
                className='topics'>{link.label}</a>)
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Test;