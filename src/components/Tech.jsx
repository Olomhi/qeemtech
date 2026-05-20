import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

import EduShot from "../assets/Edushot.png";
import WeatherShot from "../assets/Weathershot.png";
import QeemTechShot from "../assets/QeemTechShot.png";

const projects = [
  {
    title: "EduFund",
    desc: "EduFund connects verified students with trusted donors to keep dreams alive and classrooms full.",
    tech: [
      "React",
      "CSS Modules",
      "Axios",
      "Figma",
      "Styled-Components",
      "React-Router",
      "Context-API",
      "API",
    ],
    github: "https://github.com/olomhi",
    live: "https://edu-fund-gamma.vercel.app/",
    image: EduShot,
  },

  {
    title: "Weather App",
    desc: "Modern weather application with real-time weather updates and responsive UI.",
    tech: ["React", "Styled-Components", "Axios", "API"],
    github: "https://github.com/olomhi",
    live: "https://qeem-weather-app.vercel.app/",
    image: WeatherShot,
  },

  {
    title: "QEEM-Tech Portfolio",
    desc: "Just like in sports, I approach development with discipline, consistency, and precision. I build fast, responsive, and visually engaging web applications, focusing on performance, structure, and seamless user experience.",
    tech: ["React", "Framer-Motion", "Styled-Components", "Figma"],
    github: "https://github.com/olomhi",
    live: "https://qeemtech.vercel.app/",
    image: QeemTechShot,
  },
];

const Tech = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Section id="Tech">
      <Container>
        <Header
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Title>Tech Projects</Title>
          <Subtitle>What I’ve Built!</Subtitle>
        </Header>

        <Cards>
          {projects.map((project, index) => (
            <Card
              key={index}
              as={motion.div}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(project)}
            >
              <Image src={project.image} alt={project.title} />

              <Content>
                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <Tags>
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </Tags>

                <Links>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub />
                  </a>
                </Links>
              </Content>
            </Card>
          ))}
        </Cards>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Container>
    </Section>
  );
};

export default Tech;

const Section = styled.section`
  padding: 100px 0;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  color: #00ff88;
  margin-top: 10px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  width: 100%;
`;

const Card = styled.div`
  flex: 1 1 320px;

  max-width: 380px;
  min-width: 280px;

  background: #111;
  border-radius: 20px;
  overflow: hidden;

  cursor: pointer;

  transition: 0.3s ease;

  border: 1px solid #d6e6de;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 255, 136, 0.12);
    /* border-color: #00ff88; */
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const Content = styled.div`
  padding: 24px;

  h3 {
    color: white;
    margin-bottom: 12px;
    font-size: 1.3rem;
  }

  p {
    color: #bdbdbd;
    line-height: 1.7;
    font-size: 0.95rem;
    margin-bottom: 18px;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  span {
    background: rgba(0, 255, 136, 0.12);
    color: #00ff88;

    padding: 8px 12px;
    border-radius: 30px;

    font-size: 0.75rem;
    font-weight: 600;
  }
`;

const Links = styled.div`
  margin-top: 22px;
  display: flex;
  gap: 18px;

  a {
    color: white;
    font-size: 1.2rem;
    transition: 0.3s;

    &:hover {
      color: #00ff88;
      transform: scale(1.1);
    }
  }
`;
