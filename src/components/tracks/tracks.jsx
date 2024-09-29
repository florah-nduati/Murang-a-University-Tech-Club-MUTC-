import React, { useState } from "react";
import "./Tracks.css";

function Tracks() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    course: "",
    yearOfStudy: "",
    track: "",
  });

  const tracks = [
    {
      name: "Cyber Security",
      description:
        "Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats.",
    },
    {
      name: "UI/UX Design",
      description:
        "Students who enroll in the UI/UX Design track will explore the principles of creating user-friendly and visually appealing interfaces.",
    },
    {
      name: "Web Development",
      description:
        "Students who pursue the Web Development track will gain comprehensive knowledge in building dynamic and responsive websites.",
    },
    {
      name: "Mobile Apps Development",
      description:
        "Students who opt for the Mobile Apps Development track will learn to design and build applications for mobile devices.",
    },
    {
      name: "Cloud Engineering",
      description:
        "Students who choose the Cloud Engineering track will dive into the world of cloud computing and its applications.",
    },
    {
      name: "Power Platform",
      description:
        "Students who select the Power Platform track will explore the capabilities of Microsoft's Power Platform.",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="tracks-page">
      <h1 className="title">tracks</h1>

      <div className="tracks-list">
        {tracks.map((track, index) => (
          <div key={index} className="track">
            <h2>{track.name}</h2>
            <p>{track.description}</p>
          </div>
        ))}
      </div>

      <h2>Register for a Track</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Current Course of Study</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Year of Study</label>
          <input
            type="text"
            name="yearOfStudy"
            value={formData.yearOfStudy}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Select Your Preferred Track</label>
          <select
            name="track"
            value={formData.track}
            onChange={handleInputChange}
            required
          >
            <option value="">Choose a track</option>
            {tracks.map((track, index) => (
              <option key={index} value={track.name}>
                {track.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Tracks;
