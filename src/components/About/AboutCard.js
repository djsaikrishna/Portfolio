import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Umm.... Hi Everyone, I am <span className="purple">Vinayak Mundakkal </span>
            from <span className="purple"> Kerala, India.</span>
            <br />Currently a student who wastes time on social media :)
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Fate isn't just a random variable assigned to you. Its something that's created by you and only depends on you. Only you."{" "}
          </p>
          <footer className="blockquote-footer">Vinayak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
