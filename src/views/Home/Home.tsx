import personalPicture from "../../assets/personal_picture.jpeg";
import "./Home.styles.scss";
import Footer from "../../components/Footer/Footer";
import Work from "./Work/Work";
import Stack from "./Stack/Stack";
import About from "./About/About";
import { motion } from "framer-motion";

//TODO: description
const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <section className="home_snapshot">
        <img src={personalPicture} width="100%" alt="Profile" />
        <h1>
          I'm Luís Azevedo.
          <br /> A Software Developer
          <br /> based in Portugal.
        </h1>
        <p>
          I'm a tenacious young developer whose pillow is the Clean Code by our
          dear Uncle Bob.
        </p>
      </section>
      <Work />
      <About />
      <Stack />
      <Footer />
    </motion.div>
  );
};

export default Home;
