import React from "react";
import "./leadership.css";
import Image1 from "../../assets/Dr-Ndia.jpg";
import Image2 from "../../assets/victory.jpg";
import Image3 from "../../assets/allan.jpg";
import Image4 from "../../assets/bridget.jpg";
import Image5 from "../../assets/ruth.jpg";
import Image6 from "../../assets/webstar.jpg";
import Image7 from "../../assets/manase.jpg";
import Image8 from "../../assets/carolyne.jpg";
import Image9 from "../../assets/stanely.jpg";
import Image10 from "../../assets/paul.jpg";
import Image11 from "../../assets/yvone.jpg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

function Leader({
  image,
  name,
  role,
  description,
  social1,
  social2,
  social3,
  social4,
}) {
  return (
    <div className="leader">
      {image}
      <h3 className="leader-name">{name}</h3>
      <p className="leader-role">{role}</p>
      <p className="leader-description">{description}</p>
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          {social1}
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          {social2}
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          {social3}
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          {social4}
        </a>
      </div>
    </div>
  );
}

function Leadership() {
  return (
    <>
      <div className="leadership-container">
        <h2 className="title">leadership</h2>
      </div>
      <div className="leadership-card">
        <Leader
          image={<img src={Image1} className="leader-image" />}
          name="dr. john ndia"
          role="patron"
          description="Dr. John Ndia is the esteemed patron of Murang’a University Tech Club, with a passion for technology education and innovation. He has over 15 years of experience in academic leadership, focusing on empowering students to thrive in the fast-evolving tech landscape. Dr. Ndia actively supports club initiatives and offers valuable guidance to ensure the club achieves its mission"
          social1={<FaSquareFacebook />}
          social2={<FaXTwitter />}
          social4={<BsLinkedin />}
        />
        <Leader
          image={<img src={Image2} className="leader-image" />}
          name="victory njeri"
          role="chairperson"
          description="Dr. John Ndia is the esteemed patron of Murang’a University Tech Club, with a passion for technology education and innovation.
           He has over 15 years of experience in academic leadership, focusing on empowering students to thrive in the fast-evolving tech landscape.
          Dr. Ndia actively supports club initiatives and offers valuable guidance to ensure the club achieves its mission"
          social1={<FaSquareFacebook />}
          social2={<FaXTwitter />}
          social4={<BsLinkedin />}
          social3={<FaInstagramSquare />}
        />
        <Leader
          image={<img src={Image3} className="leader-image" />}
          name="allan muhari"
          role="vice chairperson"
          description="Dr. John Ndia is the esteemed patron of Murang’a University Tech Club, with a passion for technology education and innovation. 
          He has over 15 years of experience in academic leadership, focusing on empowering students to thrive in the fast-evolving tech landscape. 
          Dr. Ndia actively supports club initiatives and offers valuable guidance to ensure the club achieves its mission"
          social2={<FaXTwitter />}
          social4={<BsLinkedin />}
        />
        <Leader
          image={<img src={Image4} className="leader-image" />}
          name="bridget gitonga"
          role="secretary"
          description="Dr. John Ndia is the esteemed patron of Murang’a University Tech Club, with a passion for technology education and innovation. 
          He has over 15 years of experience in academic leadership, focusing on empowering students to thrive in the fast-evolving tech landscape. 
          Dr. Ndia actively supports club initiatives and offers valuable guidance to ensure the club achieves its mission"
          social2={<FaXTwitter />}
          social4={<BsLinkedin />}
        />
        <Leader
          image={<img src={Image5} className="leader-image" />}
          name="ruth mutisya"
          role="treasurer"
          description="Dr. John Ndia is the esteemed patron of Murang’a University Tech Club, with a passion for technology education and innovation. 
          He has over 15 years of experience in academic leadership, focusing on empowering students to thrive in the fast-evolving tech landscape. 
          Dr. Ndia actively supports club initiatives and offers valuable guidance to ensure the club achieves its mission"
          social3={<FaInstagramSquare />}
          social4={<BsLinkedin />}
        />
        <Leader
          image={<img src={Image6} className="leader-image" />}
          name="webster ifedha"
          role="cyber security lead"
          description="Dr. John Ndia is the esteemed patron of Murang’a University Tech Club, with a passion for technology education and innovation. 
          He has over 15 years of experience in academic leadership, focusing on empowering students to thrive in the fast-evolving tech landscape. 
          Dr. Ndia actively supports club initiatives and offers valuable guidance to ensure the club achieves its mission"
          social1={<FaSquareFacebook />}
          social2={<FaXTwitter />}
          social4={<BsLinkedin />}
        />
        <Leader
          image={<img src={Image7} className="leader-image" />}
          name="manase gunga"
          role="UI/UX lead"
          description="Dr. John Ndia is the esteemed patron of Murang’a University Tech Club, with a passion for technology education and innovation. 
          He has over 15 years of experience in academic leadership, focusing on empowering students to thrive in the fast-evolving tech landscape. 
          Dr. Ndia actively supports club initiatives and offers valuable guidance to ensure the club achieves its mission"
          social1={<FaSquareFacebook />}
          social2={<FaXTwitter />}
          social4={<BsLinkedin />}
          social3={<FaInstagramSquare />}
        />
        <Leader
          image={<img src={Image8} className="leader-image" />}
          name="carolyne githenduka"
          role="web development lead"
          description="Dr. John Ndia is the esteemed patron of Murang’a University Tech Club, with a passion for technology education and innovation. 
          He has over 15 years of experience in academic leadership, focusing on empowering students to thrive in the fast-evolving tech landscape. 
          Dr. Ndia actively supports club initiatives and offers valuable guidance to ensure the club achieves its mission"
          social1={<FaSquareFacebook />}
          social2={<FaXTwitter />}
          social4={<BsLinkedin />}
          social3={<FaInstagramSquare />}
        />
        <Leader
          image={<img src={Image9} className="leader-image" />}
          name="stanely amunze"
          role="mobile apps development lead"
          description="Dr. John Ndia is the esteemed patron of Murang’a University Tech Club, with a passion for technology education and innovation. 
          He has over 15 years of experience in academic leadership, focusing on empowering students to thrive in the fast-evolving tech landscape. 
          Dr. Ndia actively supports club initiatives and offers valuable guidance to ensure the club achieves its mission"
          social1={<FaSquareFacebook />}
          social2={<FaXTwitter />}
          social4={<BsLinkedin />}
        />
        <Leader
          image={<img src={Image10} className="leader-image" />}
          name="paul karanja"
          role="cloud engineering lead"
          description="Dr. John Ndia is the esteemed patron of Murang’a University Tech Club, with a passion for technology education and innovation. 
          He has over 15 years of experience in academic leadership, focusing on empowering students to thrive in the fast-evolving tech landscape. 
          Dr. Ndia actively supports club initiatives and offers valuable guidance to ensure the club achieves its mission"
          social1={<FaSquareFacebook />}
          social2={<FaXTwitter />}
          social4={<BsLinkedin />}
          social3={<FaInstagramSquare />}
        />
        <Leader
          image={<img src={Image11} className="leader-image" />}
          name="yvonn mbithe"
          role="power platform lead"
          description="Dr. John Ndia is the esteemed patron of Murang’a University Tech Club, with a passion for technology education and innovation. 
          He has over 15 years of experience in academic leadership, focusing on empowering students to thrive in the fast-evolving tech landscape. 
          Dr. Ndia actively supports club initiatives and offers valuable guidance to ensure the club achieves its mission"
          social1={<FaSquareFacebook />}
          social2={<FaXTwitter />}
          social4={<BsLinkedin />}
          social3={<FaInstagramSquare />}
        />
      </div>
    </>
  );
}
export default Leadership;
