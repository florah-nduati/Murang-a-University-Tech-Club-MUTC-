import "./about.css";
import aboutImage from "../../assets/about.jpg";
function AboutUs() {
  return (
    <section className="about-us section">
      <h2 className="title">about us</h2>
      <div className="about-us-container">
        <div className="about-us-textbox">
          <p className="introduction">
            The Murang'a University Tech Club (MUTC) is a vibrant community of
            tech enthusiasts committed to advancing knowledge in programming,
            innovation, and technology. We believe in fostering a learning
            environment where members can grow their skills and collaborate on
            groundbreaking projects.
          </p>

          <img src={aboutImage} className="image" />
        </div>

        <div className="about-us-card">
          <div className="about-us-details">
            <h3 className="about-us-card-title">our mission</h3>
            <p className="about">
              To empower students with the knowledge and skills necessary to
              succeed in the ever-evolving world of technology.
            </p>
          </div>

          <div className="about-us-details">
            <h3 className="about-us-card-title">our vision</h3>
            <p className="about">
              To empower students with the knowledge and skills necessary to
              succeed in the ever-evolving world of technology.
            </p>
          </div>

          <div className="about-us-details">
            <h3 className="about-us-card-title">our objectives</h3>
            <ul className="about-list">
              <li>Provide workshops in programming and tech.</li>
              <li>Offer networking opportunities.</li>
              <li>Host engaging events.</li>
              <li>Encourage teamwork and innovation.</li>
            </ul>
          </div>

          <div className="about-us-details">
            <h3 className="about-us-card-title">our core values</h3>
            <ul className="about-list">
              <li>Innovation</li>
              <li>Collaboration</li>
              <li>Leadership</li>
              <li>Continuous Learning</li>
            </ul>
          </div>
        </div>
      </div>
      <a href="" className="cta-buton">
        {" "}
        learn more
      </a>
    </section>
  );
}

export default AboutUs;
