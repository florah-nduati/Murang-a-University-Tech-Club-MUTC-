import "./testimonies.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import testimonies from "../../data/testimonies";

function TestimonyCard({ alumniAvater, alumniName, title, text }) {
  return (
    <div className="testimony-card">
      <div className="testimony-card-details">
        <img src={alumniAvater} alt={alumniName} />
        <h4 className="testimony-card-customer-name">{alumniName}</h4>
      </div>
      <h4 className="testimony-title">{title}</h4>
      <p className="testimony-text">{text}</p>
    </div>
  );
}
function Testimonies() {
  return (
    <Carousel>
      <section className="testimonies-section">
        <h2 className="title">testimonies</h2>
        <div className="testimonies-container">
          {Testimonies.map((testimony, i) => (
            <TestimonyCard
              key={i}
              alumniAvater={testimony.alumniAvater}
              alumniName={testimony.alumniName}
              title={testimony.title}
              text={testimony.text}
            />
          ))}
        </div>
      </section>
    </Carousel>
  );
}

export default Testimonies;
