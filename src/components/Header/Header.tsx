import { ReactComponent as SignatureIcon } from "../../assets/signature.svg";
import "./Header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <SignatureIcon className="header_signature" />
      <ul>
        <li>
          <span className="header_link">Work</span>
        </li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
