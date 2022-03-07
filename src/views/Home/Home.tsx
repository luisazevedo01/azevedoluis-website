import Header from "../../components/Header/Header";
import "./Home.styles.scss";

//TODO: add picture, description and style
const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="home_picture"></section>
      <section className="home_description">
        <h1>
          I'm Luís Azevedo.
          <br /> A Software Developer
          <br /> based in Portugal.
        </h1>
        <p>lorem ipsum</p>
      </section>
    </div>
  );
};

export default Home;
