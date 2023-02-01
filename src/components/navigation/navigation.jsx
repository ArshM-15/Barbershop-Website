import { Fragment } from "react";
import "./navigation.scss";
import { Link } from "react-scroll";

import Logo from "../../images/logo.png";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} className="logo" />
          </Link>
        </div>

        <div className="nav-items-container">
          <Link
            className="nav-item"
            to="about"
            spy={true}
            smooth={true}
            offset={-350}
            duration={700}
          >
            About
          </Link>
          <Link
            className="nav-item"
            to="team"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
          >
            Team
          </Link>
          <Link
            className="nav-item"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
          >
            Contact
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;
