import "./About.styles.scss";

export default function About() {
  return (
    <div className="home_values-container">
      <section>
        <header>
          <h1>About</h1>
        </header>
        <p>
          I went to an intensive Bootcamp where I learned to be an autodidact.
          With a pile of energy to spare, I uncovered a passion for blockchain.
          Today I am a part of a DAO(Decentralized Autonomous Organization)
          where I'm close to the blockchain world. By being a part of the Front
          End team developing new features with React while consuming data from
          various blockchains!
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
  );
}
