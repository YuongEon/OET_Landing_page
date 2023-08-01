import React, { useRef } from "react";
import Header from "../../components/ui/header/Header";
import Footer from "../../components/ui/footer/Footer";
import Slider from "./components/slider/Slider";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";

const Layout = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Slider />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </main>
  );
};

export default Layout;
