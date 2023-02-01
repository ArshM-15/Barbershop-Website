import "./contact.scss";
import { useSpring, animated, useScroll } from "@react-spring/web";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-box">
        <h2>Contact</h2>
        <h1>Downtown Nowhere</h1>
        <div className="info-box">
          <div className="address">
            <p>
              01 Somewhere Street
              <br />
              Nowhere, ON
              <br />
              N1P2J3
              <br />
              123-456-7890
              <br />
              arshvir.mundi@gmail.com
            </p>
          </div>

          <div className="timing">
            <h3>
              MON: 9 AM - 6PM
              <br />
              TUES: 9 AM - 6PM
              <br />
              WED: 9 AM - 6PM
              <br />
              THUR: 9 AM - 6PM
              <br />
              FRI: 9 AM - 6PM
              <br />
              SAT: 9 AM - 6PM
              <br />
              SUN: CLOSED
              <br />
            </h3>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          className="map"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=431%20highland&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          height="330em"
          width="330em"
        />
      </div>
    </div>
  );
};

export default Contact;
