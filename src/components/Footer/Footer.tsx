import "./Footer.styles.scss";
import NFTPfp from "../../assets/pfp.gif";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

//TODO: NFT as Logo
const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-container_copyrights">
        <header>
          <img src={NFTPfp} alt="NFT" />
          <section>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/luisgomesazevedo/"
            >
              <BsLinkedin color="#0077B5" size="24px" />
            </a>
            <a target="_blank" href="https://github.com/luisazevedo01">
              <BsGithub color="white" size="24px" />
            </a>
          </section>
        </header>
        <p>Not Copyright 2022 - Luís Azevedo. </p>
      </section>
      <section className="footer-container_nav">
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
