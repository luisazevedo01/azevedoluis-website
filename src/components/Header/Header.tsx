import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as SignatureIcon } from "../../assets/signature.svg";
import "./Header.styles.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState<string>("");
  const [show, setShow] = useState<boolean>(true);
  const [prevY, setPrevY] = useState<number>(0);

  const showHeader = () => {
    if (window.scrollY > prevY) setShow(false);
    if (window.scrollY <= prevY) setShow(true);
    setPrevY(window.scrollY);
  };

  const handleSignature = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };
  useEffect(() => {
    window.addEventListener("scroll", showHeader, { passive: true });
  });

  useEffect(() => {
    setActive(window.location.href);
  }, [location.pathname]);

  return (
    <Fragment>
      {show && (
        <div className="header">
          <span onClick={handleSignature}>
            <SignatureIcon className="header_signature" />
          </span>
          <ul>
            {
              // <li
              //   className={
              //     active.includes("/blog")
              //       ? "header_link-active"
              //       : "header_link"
              //   }
              //   onClick={(e) => navigate("/blog")}
              // >
              //   Blog
              // </li>
            }
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default Header;
