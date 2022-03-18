import personalPicture from "../../assets/personal_picture.jpeg";
import "./Home.styles.scss";

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
      <div className="home_work-container">
        <header>
          <h5>WORK EXPERIENCE</h5>
          <h3>Organizations I have worked for in the past.</h3>
        </header>
        <section id="home_works">
          <span>
            <h1>01</h1>
            <h3>
              <span style={{ color: "#609BFF" }}>iTech-on</span>, Junior
              Fullstack Developer
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
              ullamcorper dui.
            </p>
          </span>
          <span>
            <h1>02</h1>
            <h3>
              <span style={{ color: "#3CC74E" }}>Auroch</span>, Junior React
              Developer
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
              ullamcorper dui.
            </p>
          </span>
          <span>
            <h1>03</h1>
            <h3>
              <span style={{ color: "#E95D90" }}>OlympusDAO</span>, React
              Developer
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
              ullamcorper dui.
            </p>
          </span>
        </section>
      </div>
      <div className="home_values-container">
        <section>
          <h1>Philosophy & values</h1>
        </section>
        <section>
          <img
            width="100%"
            height="100%"
            src="https://armoredbasement.com/wp-content/uploads/2019/08/business-values.jpeg
"
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
