import { ToastContainer } from "react-toastify";
import About from "./Componants/About";
import Banner from "./Componants/Banner";
import ClientTestimonials from "./Componants/ClientTestimonials";
import Contact from "./Componants/Contact";
import EducationTimeline from "./Componants/EducationTimeline";
import Footer from "./Componants/Footer";
import Navbar from "./Componants/Navbar"
import Projects from "./Componants/Projects";
import Services from "./Componants/Services";
import Skills from "./Componants/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from "./Componants/Experience";

function App() {

  AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: false,
  });

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
      <Projects></Projects>
         <Services></Services>
      <EducationTimeline></EducationTimeline>
      {/* <ClientTestimonials></ClientTestimonials> */}
      <Contact></Contact>
      <footer className="bg-[#04bfff]">
        <Footer></Footer>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default App
