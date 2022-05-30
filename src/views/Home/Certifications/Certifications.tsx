import CardSlider, { Card } from "../../../components/CardSlider/CardSlider";
import "./Certifications.styles.scss";

const Certifications = () => {
  return (
    <div className="certifications">
      <header className="certifications_header">
        <h5>CERTIFICATIONS</h5>
        <h3>Some certifications I have received.</h3>
      </header>
      <section className="certifications_container">
        <CardSlider>
          <Card>
            <h1>AWS Cloud Practitioner</h1>
            <p>lorem CLF-C01</p>
          </Card>
        </CardSlider>
      </section>
    </div>
  );
};

export default Certifications;
