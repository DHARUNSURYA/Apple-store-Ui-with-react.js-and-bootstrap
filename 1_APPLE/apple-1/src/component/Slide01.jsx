import React from "react";
import "../css/slide01.css";
const Slide01 = ({ imageUrl, text }) => {
  return (
    <>
      <div className="slide01con">
        <img src={imageUrl} alt={text} className="slide01_img" />
        <p className="slide01_text">{text}</p>
      </div>
    </>
  );
};

export default Slide01;
