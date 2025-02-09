import React from "react";

const Slider05 = ({ imageUrl, title, price }) => {
  return (
    <div className="card border-0 shadow-sm p-4 text-center rounded-4">
      <img
        src={imageUrl}
        alt={title}
        className="img-fluid mb-3"
        style={{ width: "300px" }}
      />

      <h5 className="fw-bold" style={{ backgroundColor: "transparent" }}>
        {title}
      </h5>

      <p className="text-muted" style={{ backgroundColor: "transparent" }}>
        {price}
      </p>
    </div>
  );
};

export default Slider05;
