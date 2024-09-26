import "./testimonies.css";
import testimonies from "../../data/testimonies";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//import alumni1 from "../../assets/alumni1.jpg";

const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
function TestimoniesCard({ alumniAvater, alumniName, title, text }) {
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

function Testimonies({deviceType}) {
   
  return (
  
    <section className="testimonies-section">
      <h2 className="title">testimonies</h2>
      <Carousel   swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={5000}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px">
      {testimonies.map((testimony, i) => ( 
      <div className="testimonies-container" key={testimony.alumniName}>
        <TestimoniesCard
          alumniAvater={testimony.alumniAvater}
          alumniName={testimony.alumniName}
          title={testimony.title}
          text={testimony.text}
        />
      </div>
      ))}
      </Carousel>
    </section>

  );
}

export default Testimonies;
