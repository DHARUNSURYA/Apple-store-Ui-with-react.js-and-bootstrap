import React from "react";
import "../css/nav.css";
export default function Nav() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          {/* <li className="nav-item apple-logo"></li> */}
          <li className="nav-item">Store</li>
          <li className="nav-item">Mac</li>
          <li className="nav-item">iPad</li>
          <li className="nav-item">iPhone</li>
          <li className="nav-item">Watch</li>
          <li className="nav-item">AirPods</li>
          <li className="nav-item">TV & Home</li>
          <li className="nav-item">Entertainment</li>
          <li className="nav-item">Accessories</li>
          <li className="nav-item">Support</li>
          {/* <li className="nav-item search-icon">🔍</li>
          <li className="nav-item bag-icon">🛍</li> */}
        </ul>
      </nav>
    </>
  );
}
