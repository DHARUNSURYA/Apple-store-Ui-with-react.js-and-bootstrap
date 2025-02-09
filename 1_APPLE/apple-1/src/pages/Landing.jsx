import React from "react";
import Nav from "../component/nav";
import Slide01 from "../component/Slide01";
import Slide02 from "../component/Slide02";
import "../css/landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider03 from "../component/Slider03";
import Slider04 from "../component/Slider04";
import Slider05 from "../component/Slider05";
import Footer from "../component/Footer";
const Landing = () => {
  const slide_1 = [
    { path: "small_card01.png", text: "Mac", link: "#" },
    { path: "small_card02.png", text: "iPhon", link: "#" },
    { path: "small_card03png.png", text: "iPad", link: "#" },
    { path: "small_card04.png", text: "Apple Watch", link: "#" },
    { path: "small_card05.png", text: "AirPods", link: "#" },
    { path: "small_card06.png", text: "AirTag", link: "#" },
    { path: "small_card07.png", text: "Apple TV 4K", link: "#" },
    { path: "small_card08.png", text: "HomePod", link: "#" },
    { path: "small_card09.png", text: "Accessories", link: "#" },
  ];
  const slide_2 = [
    {
      path: "slide02_imag01.jpg",
      title: "iPhon 16 pro",
      subText: "Built for Apple Interlligence.",
      prize: "From $119900.00",
      clr: "white",
    },
    {
      path: "slide02_imag02.jpg",
      title: "Apple Watch Series 10",
      subText: "Thinstant classic.",
      prize: "From $46900.00",
      clr: "black",
    },
    {
      path: "slide02_imag03.jpg",
      title: "MacBook Pro",
      subText: "Built for Apple Ingelligence.",
      prize: "From $169900.00",
      clr: "white",
    },
    {
      path: "slide02_imag04.jpg",
      title: "Apple Watch Black Unity Sport Loop",
      subText: "United by rhythm.",
      prize: "From $4500.00",
      clr: "white",
    },
    {
      path: "slide02_imag06.jpg",
      title: "iPad mini",
      subText: "Built for Apple Ingelligence.",
      prize: "From $49900.00",
      clr: "black",
    },
    {
      path: "slide02_imag07.jpg",
      title: "iPhone 16",
      subText: "Built for Apple Ingelligence.",
      prize: "From $79900.00",
      clr: "white",
    },
    {
      path: "slide02_imag08.jpg",
      title: "Apple Watch Ultra 2",
      subText: "New finish. Never quit.",
      prize: "From $89900.00",
      clr: "white",
    },
    {
      path: "slide02_imag09.jpg",
      title: "iPad Air",
      subText: "Built for Apple Ingelligence.",
      prize: "From $59900.00",
      clr: "black",
    },
    {
      path: "slide02_imag10.jpg",
      title: "Mac mini",
      subText: "Built for Apple Ingelligence.",
      prize: "From $59900.00",
      clr: "black",
    },
    {
      path: "slide02_imag11.jpg",
      title: "iPad Pro",
      subText: "Built for Apple Ingelligence.",
      prize: "From $99900.00",
      clr: "white",
    },
    {
      path: "slide02_imag12.jpg",
      title: "MacBook Air",
      subText: "Built for Apple Ingelligence.",
      prize: "From $99900.00",
      clr: "black",
    },
    {
      path: "slide02_imag13.jpg",
      title: "iMac",
      subText: "Built for Apple Ingelligence.",
      prize: "From $134900.00",
      clr: "black",
    },
    {
      path: "slide02_imag14.jpg",
      title: "Apple Watch SE",
      subText: "A great deal to love.",
      prize: "From $24900.00",
      clr: "black",
    },
  ];
  const slide_3 = [
    {
      path: "slide03_imag01.jpg",
      text: "Discover a new way to shop",
      link: "APPLE STORE APP",
    },
    {
      path: "slide03_imag2.jpg",
      text: "Explore recommendiations customised for you.",
      link: "PERSONALISATION",
    },
    {
      path: "slide03_imag03.jpg",
      text: "Browse. Save. Pick up where you left off.",
      link: "SEAMLESS SHOPPING",
    },
    {
      path: "slide04_imag04.jpg",
      text: "Learn how to get more from your devices.",
      link: "GO FURTHER",
    },
  ];
  const slide_4 = [
    {
      path: "slide04_01.jpg",
      text: "IPhone 16 Pro Clear Case with MagSafe",
      prize: "MRP $4900.00 (lncl. of all taxess)",
    },
    {
      path: "slider04_02.jpg",
      text: "46mm Black Unity Sport Loop.",
      prize: "MRP $4900.00 (lncl. of all taxess)",
    },
    {
      path: "slider04_03.jpg",
      text: "AirPods Max - Purple",
      prize: "MRP $59900.00 (lncl. of all taxess)",
    },
    {
      path: "slider04_04.jpg",
      text: "IPhone 16 Pro Clear Case",
      prize: "MRP $4900.00 (lncl. of all taxess)",
    },
    {
      path: "slider04_05.jpg",
      text: "Beast Pill - Wireless Bluetooth Speaker",
      prize: "MRP $4900.00 (lncl. of all taxess)",
    },
    {
      path: "slider04_06.jpg",
      text: "42mm Dark Taupe Modern Bunkle - Medium",
      prize: "MRP $4900.00 (lncl. of all taxess)",
    },
    {
      path: "slider04_07.jpg",
      text: "Beasts Solo 4 - On-Ear Wireless",
      prize: "MRP $4900.00 (lncl. of all taxess)",
    },
    {
      path: "slider04_08.jpg",
      text: "iPhone FineWoven Wallet With MagSafe",
      prize: "MRP $4900.00 (lncl. of all taxess)",
    },
    {
      path: "slider04_09.jpg",
      text: "Smart Foloio for iPad mini (A17 Pro)",
      prize: "MRP $4900.00 (lncl. of all taxess)",
    },
  ];
  const slide_5 = [
    {
      path: "air01.jpg",
      text: "AirPos 4 with Active Noise Cancellation",
      prize: "MRP $17900.00 (lncl. of all taxess)",
    },
    {
      path: "air02.jpg",
      text: "AirPos Pro 2",
      prize: "MRP $24900.00 (lncl. of all taxess)",
    },
    {
      path: "air03.jpg",
      text: "AirTag",
      prize: "MRP $34900.00 (lncl. of all taxess)",
    },
    {
      path: "air04.jpg",
      text: "Apple Pencil Pro",
      prize: "MRP $11900.00 (lncl. of all taxess)",
    },
    {
      path: "air05.jpg",
      text: "AirTag 4 pack",
      prize: "MRP $11900.00 (lncl. of all taxess)",
    },
    {
      path: "air06.jpg",
      text: "Apple Pencil (2nd Generation)",
      prize: "MRP $11900.00 (lncl. of all taxess)",
    },
  ];
  return (
    <>
      <div>
        <Nav />
        <div className="spce01">
          {" "}
          <span className="offText">
            {" "}
            Get up to 24 months of No Cost EMI plus up to ₹10000.00 instant
            cashback on selected products with eligible cards.{" "}
          </span>
        </div>

        <div class="heart"></div>

        <div class="slide-container">
          <h1>
            <span class="highlight">Store.</span> Last chance for Valentine's{" "}
            <br />
            Day gifts made to <br /> love.
          </h1>
        </div>

        <div className="slide01">
          {slide_1.map((item, index) => (
            <Slide01 key={index} imageUrl={item.path} text={item.text} />
          ))}
        </div>

        <div>
          <div className="container mt-5 mb-3">
            <h3>
              <span className="highlight">The latest.</span>{" "}
              <span style={{ color: "gray" }}>All-new, and heartfelt.</span>
            </h3>
          </div>
          <div className="container-fluid">
            <div
              className="d-flex overflow-auto  py-3"
              style={{ whiteSpace: "nowrap", scrollbarWidth: "none" }}
            >
              {slide_2.map((item, index) => (
                <div key={index} className="flex-shrink-0 mx-2">
                  <Slide02
                    imageUrl={item.path}
                    title={item.title}
                    subText={item.subText}
                    prize={item.prize}
                    clr={item.clr}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="container mt-5 mb-3">
            <h3>
              <span className="highlight">The latest.</span>{" "}
              <span style={{ color: "gray" }}>All-new, and heartfelt.</span>
            </h3>
          </div>
          <div className="container-fluid">
            <div
              className="d-flex overflow-auto  py-3"
              style={{ whiteSpace: "nowrap", scrollbarWidth: "none" }}
            >
              {slide_3.map((item, index) => (
                <div key={index} className="flex-shrink-0 mx-2">
                  <Slider03
                    imageUrl={item.path}
                    text={item.text}
                    link={item.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mt-5 mb-3">
          <h3>
            <span className="highlight">Accessories.</span>{" "}
            <span style={{ color: "gray" }}>Find the perfect match.</span>
          </h3>
        </div>
        <div className="container-fluid">
          <div
            className="d-flex overflow-auto py-3"
            style={{ scrollbarWidth: "none", gap: "15px" }}
          >
            {slide_4.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ minWidth: "250px" }}
              >
                <Slider04
                  imageUrl={item.path}
                  title={item.text}
                  price={item.prize}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-5 mb-3">
          <h3>
            <span className="highlight">Personalisation.</span>{" "}
            <span style={{ color: "gray" }}>
              A Valentine's gift just for them.
            </span>
          </h3>
        </div>
        <div className="container-fluid">
          <div
            className="d-flex overflow-auto py-3"
            style={{ scrollbarWidth: "none", gap: "15px" }}
          >
            {slide_5.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ minWidth: "250px" }}
              >
                <Slider05
                  imageUrl={item.path}
                  title={item.text}
                  price={item.prize}
                />
              </div>
            ))}
          </div>
        </div>

        {/* <div className="container mt-5 mb-3">
          <h3>
            <span className="highlight">The Apple Store difference.</span>{" "}
            <span style={{ color: "gray" }}>So many reasons to love.</span>
          </h3>
        </div>
        <div className="container-fluid">
          <div
            className="d-flex overflow-auto py-3"
            style={{ scrollbarWidth: "none", gap: "15px" }}
          >
            {slide_5.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ minWidth: "250px" }}
              >
                <Slider05
                  imageUrl={item.path}
                  title={item.text}
                  price={item.prize}
                />
              </div>
            ))}
          </div>
        </div> */}
        <Footer />
      </div>
    </>
  );
};

export default Landing;
