import "./testimonies.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import customer1 from "../../assets/alumni1.jpg";
function TestimoniesCard({ customerAvater, customerName, title, text }) {
  return (
    <div className="testimony-card">
      <div className="testimony-card-details">
        <img src={customerAvater} alt={customerName} />
        <h4 className="testimony-card-customer-name">{customerName}</h4>
      </div>
      <h4 className="testimony-title">{title}</h4>
      <p className="testimony-text">{text}</p>
    </div>
  );
}
function Testimonies() {
  return (
    <section className="testimonies-section">
      <h2 className="title">testimonies</h2>
      <div className="testimonies-container">
        <TestimoniesCard
          customerAvater={customer1}
          customerName="lucy wambui"
          title="Web Developer and Alumni"
          text="MUTC gave me the foundation I needed to become a professional web developer. The hands-on workshops and collaborative projects not only boosted my technical skills but also connected me with a supportive network of like-minded individuals. I owe my career success to the experience and mentorship I gained from the club."
        />
      </div>
    </section>
  );
}

export default Testimonies;
