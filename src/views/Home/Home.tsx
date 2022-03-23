import personalPicture from "../../assets/personal_picture.jpeg";
import { ImHtmlFive2 } from "react-icons/im";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import "./Home.styles.scss";
import Footer from "../../components/Footer/Footer";

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
        <section className="skillset-intro">
          <h1>Skillset</h1>
          <p>
            I'm currently focused on developing my skills regarding my current
            tech stack but be sure that I still have plenty of energy left to
            learn new technologies and development approaches.
          </p>
        </section>
        <section className="skillset-skills">
          <article>
            <header>
              <SiJavascript />
              <h2>Javascript</h2>
            </header>
            <p>lorem ipsum</p>
          </article>
          <article>
            <header>
              <SiTypescript />
              <h2>Typescript</h2>
            </header>
            <p>lorem ipsum</p>
          </article>
          <article>
            <header>
              <ImHtmlFive2 />
              <h2>HTML</h2>
            </header>
            <p>lorem ipsum</p>
          </article>
          <article>
            <header>
              <SiCss3 />
              <h2>CSS</h2>
            </header>
            <p>lorem ipsum</p>
          </article>
        </section>
      </div>
      <div className="home_projects-container">
        <h5>MY PROJECTS</h5>
        <h1>Work I have done</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
