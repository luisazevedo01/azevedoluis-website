import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as SignatureIcon } from "../../assets/signature.svg";
import "./Header.styles.scss";

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(window.location.href);
  }, [location.pathname]);

  return (
    <div className="header">
      <Link to="/">
        <SignatureIcon className="header_signature" />
      </Link>
      <ul>
        <li>
          {!active.includes("/blog") ? (
            <Link
              className={
                active.includes("/blog") ? "header_link-active" : "header_link"
              }
              to="/blog"
            >
              Blog
            </Link>
          ) : (
            <Link to="/">
              <ImCross size="small" />
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
