import "./Footer.styles.scss";
import NFTPfp from "../../assets/pfp.gif";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

//TODO: NFT as Logo
const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-container_copyrights">
        <header>
          <img src={NFTPfp} alt="NFT" />
          <section>
            <BsLinkedin color="#0077B5" size="24px" />
            <BsGithub size="24px" />
          </section>
        </header>
        <p>Not Copyright 2022 - Luís Azevedo. </p>
      </section>
      <section className="footer-container_nav">
        <ul>
          <li>blog</li>
          <li>contact</li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
