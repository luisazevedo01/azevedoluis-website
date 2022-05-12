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
            Developing both frontend and backend features, creating SQL views,
            and adapting the database architecture whenever necessary.
            Identifying and creating issues based on documentation and customer
            feedback.
          </p>
        </span>
        <span>
          <h1>02</h1>
          <h3>
            <span style={{ color: "#3CC74E" }}>Auroch</span>, Junior React
            Developer / Co-founder
          </h3>
          <p>
            Discussion of products and ideas, understanding and defining
            architectures based on the client's needs. Responsible for front-end
            development.
          </p>
        </span>
        <span>
          <h1>03</h1>
          <h3>
            <span style={{ color: "#E95D90" }}>OlympusDAO</span>, React
            Developer
          </h3>
          <p>
            Developing front-end features/solving bugs with React/NextJS, while
            consuming data from various blockchains. Refactoring JSX to TSX.
          </p>
        </span>
      </section>
    </div>
  );
}
