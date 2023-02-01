import "./footer.scss";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="logo" />
      <h4>Made with passion</h4>
    </div>
  );
};

export default Footer;
