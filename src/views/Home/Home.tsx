import personalPicture from "../../assets/personal_picture.jpeg";
import "./Home.styles.scss";
import Footer from "../../components/Footer/Footer";
import Values from "./Values/Values";
import Work from "./Work/Work";
import Stack from "./Stack/Stack";

//TODO: description
const Home = () => {
  return (
    <div className="home">
      <div className="home_snapshot-container">
        <section className="home_picture">
          <img src={personalPicture} />
        </section>
        <section className="home_description">
          <h1>
            I'm Luís Azevedo.
            <br /> A Software Developer
            <br /> based in Portugal.
          </h1>
          <p>
            I'm a tenacious young junior developer whose pillow is the Clean
            Code by our dear Uncle Bob.
          </p>
        </section>
      </div>
      <Work />
      <Values />
      <Stack />
      <div className="home_projects-container">
        <h5>MY PROJECTS</h5>
        <h1>Work I have done</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
