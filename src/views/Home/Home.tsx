import Header from "../../components/Header/Header";
import personalPicture from "../../assets/personal_picture.jpeg";
import "./Home.styles.scss";

//TODO: add picture, description and style
const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home_container">
        <section className="home_picture">
          <img src={personalPicture} />
        </section>
        <section className="home_description">
          <h1>
            I'm Luís Azevedo.
            <br /> A Software Developer
            <br /> based in Portugal.
          </h1>
          <p>lorem ipsum</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
