import "./team.scss";
import JasonImage from "../../images/team-jason.jpg";
import ImranImage from "../../images/team-imran.jpg";
import MiaImage from "../../images/team-mia.jpg";
import HarleyImage from "../../images/team-harley.jpg";

const Team = () => {
  return (
    <div className="team" id="team">
      <div className="team-title">
        <h2>Meet the family</h2>
        <p>
          Meet the team at Unreal Cuts! Our skilled barbers and stylists have
          years of experience in the industry and are dedicated to providing the
          best cuts, shaves, and grooming services around. Whether you're
          looking for a classic haircut or a modern style, our team has the
          skills and expertise to give you the look you want.
        </p>
      </div>

      <div className="team-card-container">
        <div className="team-card">
          <img src={JasonImage} alt="team member" />
          <h3>Jason</h3>
        </div>

        <div className="team-card">
          <img src={ImranImage} alt="team member" height="400" width="280" />
          <h3>Imran</h3>
        </div>

        <div className="team-card">
          <img src={MiaImage} alt="team member" height="400" width="280" />
          <h3>Mia</h3>
        </div>

        <div className="team-card">
          <img src={HarleyImage} alt="team member" height="400" width="280" />
          <h3>Harley</h3>
        </div>
      </div>
    </div>
  );
};

export default Team;
