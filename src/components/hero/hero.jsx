import heroVideo from "../../assets/hero2.mp4";
import "./hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <video className="hero-video" autoPlay loop muted>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-textbox">
          <p className="hero-text">
            Empowering the Next Generation of Innovators. Join Murang'a
            University Tech Club to Master the Future of Technology.
          </p>
          <a href="#" className="hero-link">
            {" "}
            view more
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
