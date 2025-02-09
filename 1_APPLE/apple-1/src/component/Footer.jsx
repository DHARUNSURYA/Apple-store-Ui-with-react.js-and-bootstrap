import React from "react";

const Footer = () => {
  return (
    <footer className=" py-4">
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-2">
            <h6 className="fw-bold">Shop and Learn</h6>
            <ul className="list-unstyled text-secondary small">
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV & Home</li>
              <li>AirTag</li>
              <li>Accessories</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold">Apple Wallet</h6>
            <ul className="list-unstyled text-secondary small">
              <li>Wallet</li>
            </ul>
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled text-secondary small">
              <li>Manage Your Apple Account</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold">Entertainment</h6>
            <ul className="list-unstyled text-secondary small">
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Podcasts</li>
              <li>Apple Books</li>
              <li>App Store</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold">Apple Store</h6>
            <ul className="list-unstyled text-secondary small">
              <li>Find a Store</li>
              <li>Genius Bar</li>
              <li>Today at Apple</li>
              <li>Apple Summer Camp</li>
              <li>Ways to Buy</li>
              <li>Apple Trade In</li>
              <li>Recycling Programme</li>
              <li>Order Status</li>
              <li>Shopping Help</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold">For Business</h6>
            <ul className="list-unstyled text-secondary small">
              <li>Apple and Business</li>
            </ul>
            <h6 className="fw-bold">For Education</h6>
            <ul className="list-unstyled text-secondary small">
              <li>Apple and Education</li>
              <li>Shop for Education</li>
              <li>Shop for University</li>
            </ul>
            <h6 className="fw-bold">For Healthcare</h6>
            <ul className="list-unstyled text-secondary small">
              <li>Apple in Healthcare</li>
              <li>Health on Apple Watch</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold">Apple Values</h6>
            <ul className="list-unstyled text-secondary small">
              <li>Accessibility</li>
              <li>Environment</li>
              <li>Privacy</li>
              <li>Supply Chain</li>
            </ul>
            <h6 className="fw-bold">About Apple</h6>
            <ul className="list-unstyled text-secondary small">
              <li>Newsroom</li>
              <li>Apple Leadership</li>
              <li>Career Opportunities</li>
              <li>Investors</li>
              <li>Ethics & Compliance</li>
              <li>Events</li>
              <li>Contact Apple</li>
            </ul>
          </div>
        </div>
        <p className="text-secondary small mb-3">
          More ways to shop:{" "}
          <a href="#" className="text-primary">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a href="#" className="text-primary">
            other retailer
          </a>{" "}
          near you. Or call 000800 040 1966.
        </p>
        <hr />
        <div className="d-flex justify-content-between text-secondary small">
          <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
          <p>
            <a href="#" className="text-secondary">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="text-secondary">
              Terms of Use
            </a>{" "}
            |{" "}
            <a href="#" className="text-secondary">
              Sales Policy
            </a>{" "}
            |{" "}
            <a href="#" className="text-secondary">
              Legal
            </a>{" "}
            |{" "}
            <a href="#" className="text-secondary">
              Site Map
            </a>
          </p>
          <p>India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
