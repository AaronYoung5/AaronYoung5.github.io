import React from "react";

import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import resumeData from "./resumeData";

const App = () => {
  return (
    <>
      <Header resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <Portfolio resumeData={resumeData} />
      <ContactMe resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </>
  );
};

export default App;
