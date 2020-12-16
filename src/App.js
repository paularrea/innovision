import React, { useRef, useState, Suspense } from "react";
import "./App.css";
import HomeComponent from "./pages/1. Home/HomeComponent";
import ProductsComponent from "./pages/4. Products/ProductsComponent";
import TeamComponent from "./pages/3. Team/TeamComponent";
import ContactComponent from "./pages/5. Contact/ContactComponent";
import Navigation from "./components/Navigation/Navigation";
import AboutComponent from "./pages/2. About/AboutComponent";
import Sensor from "react-visibility-sensor";
import FooterComponent from "./components/Footer/FooterComponent";
import Observer from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const scrollToRef = (ref) => {
  let position = ref.current.offsetTop + -90;
  window.scrollTo({ top: position, behavior: "smooth" });
};

function App() {
  const [aboutInViewport, setAboutInViewport] = useState(false);
  const [teamInViewport, setTeamInViewport] = useState(false);
  const [productsInViewport, setProductsInViewport] = useState(false);
  const [contactInViewport, setContactInViewport] = useState(false);

  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const TeamRef = useRef(null);
  const ProductsRef = useRef(null);
  const ContactRef = useRef(null);

  const executeScrollToHome = () => scrollToRef(HomeRef);
  const executeScrollToAbout = () => scrollToRef(AboutRef);
  const executeScrollToTeam = () => scrollToRef(TeamRef);
  const executeScrollToProducts = () => scrollToRef(ProductsRef);
  const executeScrollToContact = () => scrollToRef(ContactRef);

  const onChangeAbout = (inView) => {
    inView ? setAboutInViewport(true) : setAboutInViewport(false);
  };
  const onChangeTeam = (inView) => {
    inView ? setTeamInViewport(true) : setTeamInViewport(false);
  };
  const onChangeProducts = (inView) => {
    inView ? setProductsInViewport(true) : setProductsInViewport(false);
  };
  const onChangeContact = (inView) => {
    inView ? setContactInViewport(true) : setContactInViewport(false);
  };

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <Helmet>
        <title>Innovision Medical</title>
        <meta
          name="description"
          content="This is the Innovision Medical page"
        />
      </Helmet>
      <Navigation
        handleClick={handleClick}
        t={t}
        aboutInViewport={aboutInViewport}
        teamInViewport={teamInViewport}
        productsInViewport={productsInViewport}
        contactInViewport={contactInViewport}
        executeScrollToHome={executeScrollToHome}
        executeScrollToAbout={executeScrollToAbout}
        executeScrollToTeam={executeScrollToTeam}
        executeScrollToProducts={executeScrollToProducts}
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
      <div className="separator"></div>
      <Observer onChange={onChangeTeam}>
        <Sensor>
          <TeamComponent t={t} TeamRef={TeamRef} />
        </Sensor>
      </Observer>
      <div className="separator"></div>
      <Observer onChange={onChangeProducts}>
        <Sensor>
          <ProductsComponent t={t} ProductsRef={ProductsRef} />
        </Sensor>
      </Observer>
      <div className="separator"></div>
      <Observer onChange={onChangeContact}>
        <Sensor>
          <ContactComponent t={t} ContactRef={ContactRef} />
        </Sensor>
      </Observer>
      <FooterComponent t={t} />
    </>
  );
}

export default App;
