import "./Footer.styles.scss";
import NFTPfp from "../../assets/pfp.gif";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

//TODO: NFT as Logo
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer_container">
        <section className="footer_socials">
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
        </section>
        <section className="footer_container-nav">
          <ul>
            {
              // <li>
              // <Link to="/blog">Blog</Link>
              // </li>
            }
          </ul>
        </section>
      </div>
      <p>Not Copyright 2022 - Luís Azevedo. </p>
    </section>
  );
};

export default Footer;
