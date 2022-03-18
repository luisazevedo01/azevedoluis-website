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
          <header>
            <h1>Philosophy & Values</h1>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
            ullamcorper dui. Curabitur vel dolor massa. Donec cursus viverra
            nunc non feugiat. Suspendisse potenti. Morbi at felis ac orci luctus
            lacinia sit amet nec nunc. Sed suscipit ullamcorper neque, sit amet
            posuere nibh elementum eget. Praesent sit amet nisl sed est
            facilisis accumsan. Morbi vitae ornare velit, sit amet eleifend
            eros. Sed condimentum libero a dui sollicitudin, ac commodo odio
            vehicula. Ut cursus ipsum vel nisl aliquam, a blandit ipsum
            imperdiet.
          </p>
        </section>
        <section>
          <img
            width="100%"
            height="100%"
            src="https://lensvid.com/wp-content/uploads/2014/12/A-Different-Perspective-Photography-through-a-Glass-Ball-Nikon-I-AM-DIFFERENT-Latvia.jpg
"
          />
        </section>
      </div>
      <div className="home_skillset-container">
        <h1>Skillset</h1>
      </div>
      <div className="home_projects-container">
        <h3>MY PROJECTS</h3>
        <h1>Work I have done</h1>
      </div>
    </div>
  );
};

export default Home;
