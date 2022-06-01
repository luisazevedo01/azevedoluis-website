import CardSlider, { Card } from "../../../components/CardSlider/CardSlider";
import { CERTIFICATIONS } from "../../../constants";
import { Certificate } from "../../../types";
import "./Certifications.styles.scss";

const Certifications = () => {
  return (
    <div className="certifications">
      <header className="certifications_header">
        <h5>CERTIFICATES</h5>
        <h3>Some of my badges.</h3>
      </header>
      <section className="certifications_container">
        <CardSlider>
          {CERTIFICATIONS.map((props: Certificate, index) => {
            return <Card key={index} {...props} />;
          })}
        </CardSlider>
      </section>
    </div>
  );
};

export default Certifications;
