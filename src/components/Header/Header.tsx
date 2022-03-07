import profileImage from "../../assets/pfp.gif";
import "./Header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={profileImage} width="80px" alt="Profile picture" />
    </div>
  );
};

export default Header;
