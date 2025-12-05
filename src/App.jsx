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

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Skills></Skills>
      <EducationTimeline></EducationTimeline>
      {/* <ClientTestimonials></ClientTestimonials> */}
      <Contact></Contact>
      <footer className="bg-[#04bfff]">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App
