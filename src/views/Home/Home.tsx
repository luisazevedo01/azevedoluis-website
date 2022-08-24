import { Fragment, lazy, Suspense, useEffect } from "react";
import personalPicture from "../../assets/personal_picture.jpeg";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import "./Home.styles.scss";
const Footer = lazy(() => import("../../components/Footer/Footer"));
const Work = lazy(() => import("./Work/Work"));
const Stack = lazy(() => import("./Stack/Stack"));
const About = lazy(() => import("./About/About"));
const Projects = lazy(() => import("./Projects/Projects"));
const Certifications = lazy(() => import("./Certifications/Certifications"));

//TODO: description
const Home = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <div className="home">
          <section className="home_snapshot">
            <img src={personalPicture} width="100%" alt="Profile" />
            <h1>
              I'm Luís Azevedo.
              <br /> A Software Developer
              <br /> based in Portugal.
            </h1>
            <p>
              I'm a tenacious young developer whose pillow is the Clean Code by
              our dear Uncle Bob.
            </p>
          </section>
          <Work />
          <About />
          <Stack />
          <Certifications />
          <Projects />
          <Footer />
        </div>
      </Suspense>
    </Fragment>
  );
};

export default Home;
