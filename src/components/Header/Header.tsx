import { Fragment, useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as SignatureIcon } from "../../assets/signature.svg";
import "./Header.styles.scss";

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState<string>("");
  const [show, setShow] = useState<boolean>(true);
  const [prevY, setPrevY] = useState<number>(0);

  const showHeader = () => {
    if (window.scrollY > prevY) setShow(false);
    if (window.scrollY <= prevY) setShow(true);
    setPrevY(window.scrollY);
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
          <Link to="/">
            <SignatureIcon className="header_signature" />
          </Link>
          <ul>
            <li>
              {!active.includes("/blog") && (
                <Link
                  className={
                    active.includes("/blog")
                      ? "header_link-active"
                      : "header_link"
                  }
                  to="/blog"
                >
                  Blog
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default Header;
