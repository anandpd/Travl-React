import "../../App.css";
import React from "react";

import MainSection from "../Main/MainSection";
import Cards from "./Cards/Cards";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <MainSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
