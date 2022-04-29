import personalPicture from "../../assets/personal_picture.jpeg";
import "./Home.styles.scss";
import Footer from "../../components/Footer/Footer";
import Work from "./Work/Work";
import Stack from "./Stack/Stack";
import About from "./About/About";

//TODO: description
const Home = () => {
  return (
    <div className="home">
      <div className="home_snapshot-container">
        <section className="home_picture">
          <img src={personalPicture} alt="Profile" />
        </section>
        <section className="home_description">
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
      </div>
      <Work />
      <About />
      <Stack />
      <Footer />
    </div>
  );
};

export default Home;
