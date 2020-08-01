import React, { useRef, useState, Suspense } from "react";
import "./App.css";
import HomeComponent from "./pages/1. Home/HomeComponent";
import ProjectsComponent from "./pages/5. Projects/ProjectsComponent";
import ProductsComponent from "./pages/4. Products/ProductsComponent";
import TeamComponent from "./pages/3. Team/TeamComponent";
import ContactComponent from "./pages/6. Contact/ContactComponent";
import Navigation from "./components/Navigation/Navigation";
import AboutComponent from "./pages/2. About/AboutComponent";
import Sensor from "react-visibility-sensor";
import FooterComponent from "./components/Footer/FooterComponent";
import Observer from "react-intersection-observer";
import {useTranslation} from 'react-i18next'

const scrollToRef = (ref) =>
  window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

function App() {
  const [aboutInViewport, setAboutInViewport] = useState(false);
  const [teamInViewport, setTeamInViewport] = useState(false);
  const [productsInViewport, setProductsInViewport] = useState(false);
  const [projectsInViewport, setProjectsInViewport] = useState(false);
  const [contactInViewport, setContactInViewport] = useState(false);

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

  const onChangeAbout = (inView) => {
    inView ? setAboutInViewport(true) : setAboutInViewport(false);
    console.log("about Inview:", inView);
  };
  const onChangeTeam = (inView) => {
    inView ? setTeamInViewport(true) : setTeamInViewport(false);
    console.log("Team Inview:", inView);
  };
  const onChangeProducts = (inView) => {
    inView ? setProductsInViewport(true) : setProductsInViewport(false);
    console.log("Products Inview:", inView);
  };
  const onChangeProjects = (inView) => {
    inView ? setProjectsInViewport(true) : setProjectsInViewport(false);
    console.log("Projects Inview:", inView);
  };
  const onChangeContact = (inView) => {
    inView ? setContactInViewport(true) : setContactInViewport(false);
    console.log("Contact Inview:", inView);
  };


  const {t, i18n} = useTranslation();
  function handleClick(lang){
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <Navigation
        handleClick={handleClick}
        t={t}
        aboutInViewport={aboutInViewport}
        teamInViewport={teamInViewport}
        productsInViewport={productsInViewport}
        projectsInViewport={projectsInViewport}
        contactInViewport={contactInViewport}
        executeScrollToHome={executeScrollToHome}
        executeScrollToAbout={executeScrollToAbout}
        executeScrollToTeam={executeScrollToTeam}
        executeScrollToProducts={executeScrollToProducts}
        executeScrollToProjects={executeScrollToProjects}
        executeScrollToContact={executeScrollToContact}
      />
      <Suspense fallback="loading">
        <Sensor>
          <HomeComponent t={t} HomeRef={HomeRef} />
        </Sensor>
      </Suspense>

      <Observer onChange={onChangeAbout}>
        <Sensor>
          <AboutComponent t={t} AboutRef={AboutRef} />
        </Sensor>
      </Observer>
      <Observer onChange={onChangeTeam}>
        <Sensor>
          <TeamComponent t={t} TeamRef={TeamRef} />
        </Sensor>
      </Observer>
      <Observer onChange={onChangeProducts}>
        <Sensor>
          <ProductsComponent t={t} ProductsRef={ProductsRef} />
        </Sensor>
      </Observer>
      <Observer onChange={onChangeProjects}>
        <Sensor>
          <ProjectsComponent t={t} ProjectsRef={ProjectsRef} />
        </Sensor>
      </Observer>
      <Observer onChange={onChangeContact}>
        <Sensor>
          <ContactComponent t={t} ContactRef={ContactRef} />
        </Sensor>
      </Observer>
      <FooterComponent />
    </>
  );
}

export default App;
