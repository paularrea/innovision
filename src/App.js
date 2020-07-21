import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import HomeComponent from "./pages/1. Home/HomeComponent";
import ProjectsComponent from "./pages/5. Projects/ProjectsComponent";
import ProductsComponent from "./pages/4. Products/ProductsComponent";
import ProductCard from './pages/4. Products/components/ProductCard';
import TeamComponent from "./pages/3. Team/TeamComponent";
import ContactComponent from "./pages/6. Contact/ContactComponent";
import Navigation from "./components/Navigation/Navigation";
import AboutComponent from "./pages/2. About/AboutComponent";
import Sensor from "react-visibility-sensor";
import FooterComponent from "./components/Footer/FooterComponent";
import { Route } from "react-router-dom";

const scrollToRef = (ref) =>
  window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

function App() {
  const [isVisible, setVisibility] = useState(false);
  const [entered, setEntered] = useState(false);

  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const TeamRef = useRef(null);
  const ProductsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);

  const executeScrollToHome = () => scrollToRef(HomeRef);
  const executeScrollToAbout = () => scrollToRef(AboutRef);
  const executeScrollToTeam = () => scrollToRef(TeamRef);
  const executeScrollToProducts = () => scrollToRef(ProductsRef);
  const executeScrollToProjects = () => scrollToRef(ProjectsRef);
  const executeScrollToContact = () => scrollToRef(ContactRef);

  useEffect(() => {
    isVisible ? setEntered(true) : setEntered(false);
  }, [isVisible]);

  // const onEnterComponent = document.getElementsByClassName('component').style.background='red';
  // const onExitComponent = document.getElementsByClassName('component').style.background='white';

  const onChange = () => {
    setVisibility(!isVisible);
    isVisible ? setEntered(true) : setEntered(false);
  };

  return (
    <>
  
    <Navigation
        entered={entered}
        executeScrollToHome={executeScrollToHome}
        executeScrollToAbout={executeScrollToAbout}
        executeScrollToTeam={executeScrollToTeam}
        executeScrollToProducts={executeScrollToProducts}
        executeScrollToProjects={executeScrollToProjects}
        executeScrollToContact={executeScrollToContact}
      />
      <Sensor onChange={onChange}>
        <HomeComponent className='component' HomeRef={HomeRef} />
      </Sensor >
      <Sensor onChange={onChange}>
        <AboutComponent className='component' AboutRef={AboutRef} />
      </Sensor>
      <Sensor onChange={onChange}>
        <TeamComponent className='component' TeamRef={TeamRef} />
      </Sensor>
      <Sensor onChange={onChange}>
        <ProductsComponent className='component' ProductsRef={ProductsRef} />
      </Sensor>
      <Sensor onChange={onChange}>
        <ProjectsComponent className='component' ProjectsRef={ProjectsRef} />
      </Sensor>
      <Sensor onChange={onChange}>
        <ContactComponent className='component'
          ContactRef={ContactRef}
        />
      </Sensor>
      <FooterComponent/>
    </>
  );
}

export default App;
