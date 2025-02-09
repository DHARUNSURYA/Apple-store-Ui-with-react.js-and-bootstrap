import React from "react";
import "../css/slide02.css";
import "../css/landing.css";

const Slider03 = ({ imageUrl, text, link }) => {
  return (
    <div>
      <div className="slide02_container">
        <img src={imageUrl} alt={text} className="slide02_image" />
        <div className="text-overlay">
          <p className="sub-text highlightLite">{link}</p>
          <h2 className="title">{text}</h2>
        </div>
      </div>
    </div>
  );
};

export default Slider03;
