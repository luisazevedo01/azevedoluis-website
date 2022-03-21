import { Link } from "react-router-dom";
import { ReactComponent as SignatureIcon } from "../../assets/signature.svg";
import "./Header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <SignatureIcon className="header_signature" />
      </Link>
      <ul>
        <li>
          <Link className="header_link" to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="header_link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
