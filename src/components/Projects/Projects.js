import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tidal from "../../Assets/Projects/tidal.jpg";
import bot from "../../Assets/Projects/bot.jpg";
import miui from "../../Assets/Projects/miui.jpg";
import heroku from "../../Assets/Projects/heroku.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tidal}
              isBlog={false}
              title="Tidal-DL"
              description="A bot to download songs from Tidal website at Master-FLAC quality with many features using Tidal API."
              ghLink="https://github.com/vinayak-7-0-3/Tidal-DL-Telegram"
              demoLink="https://t.me/tidaldlprobot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heroku}
              isBlog={false}
              title="Heroku Manager"
              description="A bot to manage Heroku Servers from Telegram itself. Usefull for those who have multiple apps running on different accounts"
              ghLink="https://github.com/vinayak-7-0-3/heroku-tg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={miui}
              isBlog={false}
              title="MiUi Icons"
              description="A bot for MIUI users to convert the Icon Pack APK files to the system MTZ theme file."
              ghLink=""
              demoLink="https://t.me/miuiiconsbot"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bot}
              isBlog={false}
              title="Useless Media Bot"
              description="First made for my personal needs later made for the public. This bot helps you in groups where you want to deal with media files etc. especially for Mirror/Leech groups."
              ghLink="https://github.com/vinayak-7-0-3/Useless-Media-Bot"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
