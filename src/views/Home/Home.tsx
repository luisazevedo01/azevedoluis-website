import personalPicture from "../../assets/personal_picture.jpeg";
import "./Home.styles.scss";
import Footer from "../../components/Footer/Footer";
import Work from "./Work/Work";
import Stack from "./Stack/Stack";
import About from "./About/About";
import { motion } from "framer-motion";
import { PAGE_VARIANTS } from "../../constants";

//TODO: description
const Home = () => {
  return (
    <motion.div
      className="home"
      initial="initial"
      animate="in"
      exit="out"
      variants={PAGE_VARIANTS}
    >
      <motion.section
        className="home_snapshot"
        animate={{
          opacity: [0, 1],
          transition: { duration: 1.8 },
        }}
      >
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
      </motion.section>
      <Work />
      <About />
      <Stack />
      <Footer />
    </motion.div>
  );
};

export default Home;
