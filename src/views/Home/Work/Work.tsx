import "./Work.styles.scss";

export default function Work() {
  return (
    <div className="home_work-container">
      <header>
        <h5>WORK EXPERIENCE</h5>
        <h3>Organizations I have worked for in the past.</h3>
      </header>
      <section id="home_works">
        <span>
          <h1>01</h1>
          <h3>
            <span style={{ color: "#609BFF" }}>iTech-on</span>, Junior Fullstack
            Developer
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
  );
}
