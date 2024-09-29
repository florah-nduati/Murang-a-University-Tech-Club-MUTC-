import React from "react";
import "./Events.css";

function Event({ title, day, time, Venue, leader }) {
  return (
    <div className="event-card">
      <h2 className="event-title">{title}</h2>
      <p>
        <strong>Day:</strong> {day}
      </p>
      <p>
        <strong>Time:</strong> {time}
      </p>
      <p>
        <strong>Venue:</strong> {Venue}
      </p>
      <p>
        <strong>Led by:</strong> {leader}
      </p>
    </div>
  );
}

function Events() {
  const events = [
    {
      title: "Cyber Security",
      day: "Monday",
      time: "4pm - 7pm",
      Venue: "Computer Lab F04",
      leader: "Webster Ifedha",
    },
    {
      title: "UI/UX",
      day: "Tuesday",
      time: "5pm - 8pm",
      Venue: "Computer Lab F04",
      leader: "Manase Gunga",
    },
    {
      title: "Web Development",
      day: "Wednesday",
      time: "6pm - 9pm",
      Venue: "Computer Lab F04",
      leader: "Carolyne Githenduka",
    },
    {
      title: "Mobile Apps Development",
      day: "Thursday",
      time: "4pm - 7pm",
      Venue: "",
      leader: "Stanley Amunze",
    },
    {
      title: "Cloud Engineering",
      day: "Friday",
      time: "3pm - 6pm",
      Venue: "Computer Lab F04",
      leader: "Paul Karanja",
    },
    {
      title: "Power Platform",
      day: "Saturday",
      time: "1pm - 4pm",
      venue: "Computer Lab F04",
      leader: "Evyonn Mbithe",
    },
  ];

  return (
    <div className="events-page">
      <h1 className="title">events</h1>
      <div className="events-list">
        {events.map((event, index) => (
          <Event
            key={index}
            title={event.title}
            day={event.day}
            time={event.time}
            Venue={event.Venue}
            leader={event.leader}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
