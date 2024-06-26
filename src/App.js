import Header from "./components/Header";
import Frontpage from "./components/Frontpage";
import About from "./components/About";
import Ourwork from "./components/Ourwork";
import Services from "./components/Services";
import "./App.css";

import { Link, Element } from "react-scroll";
import VideoWork from "./components/VideoWork";
import NextProject from "./components/NextProject";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App bg-[#F6F4F2] ">
      <div className="relative z-50 bg-[#F6F4F2] ">
        <Header />
        <Element name="frontpage">
          <Frontpage />
        </Element>

        <Element name="about">
          <About />
        </Element>
        <Element name="ourwork">
          <Ourwork />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <VideoWork />
        <Element name="contact">
          <NextProject />
        </Element>
      </div>
      <Footer />
    </div>
  );
}

export default App;
