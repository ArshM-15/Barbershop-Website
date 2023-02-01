import "./about.scss";
import logo from "../../images/logo.png";
import { ScrollRotate } from "react-scroll-rotate";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="big-logo-container">
        <ScrollRotate method="perc" loops="2.5">
          <img src={logo} alt="logo" className="logo" />
        </ScrollRotate>
        <img src={logo} alt="logo" className="logo-mobile" />
      </div>
      <div className="about-text">
        <h2>About</h2>
        <p>
          Unreal Cuts is one of the most well-known hair salons in the area as
          it offers its clients unrealistic quality and dependability while also
          providing the best prices to its customers. We have received numerous
          unreal and outlandish awards thanks to our exceptionally talented and
          highly-skillful hair stylists who are passionate about transforming
          you and giving your hair/beard a completely new life. If you are still
          unsure of our abilities, please take some time and have a
          once-in-a-lifetime visit.
        </p>
      </div>
    </div>
  );
};

export default About;
