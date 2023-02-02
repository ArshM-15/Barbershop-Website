import "./home.scss";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-scroll";

const Home = () => {
  const animate = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 600,
    config: { friction: 200 },
  });

  return (
    <div className="home">
      <animated.div
        className="title-box"
        style={{
          ...animate,
        }}
      >
        <h1>Hello</h1>
        <h3>To the most unrealistic barbershop in the world.</h3>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={700}>
          Book Now
        </Link>
      </animated.div>
    </div>
  );
};

export default Home;
