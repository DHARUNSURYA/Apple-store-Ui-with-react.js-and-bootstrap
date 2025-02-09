import React from "react";
import "../css/slide02.css";
const Slide02 = ({ imageUrl, title, subText, prize, clr }) => {
  return (
    <>
      <div className="slide02_container" style={{ color: clr }}>
        <img src={imageUrl} alt={title} className="slide02_image" />
        <div className="text-overlay">
          <h1 className="title">{title}</h1>
          <p className="sub-text">{subText}</p>
          <p className="price">{prize}</p>
        </div>
      </div>
    </>
  );
};

export default Slide02;
