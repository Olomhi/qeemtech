import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import qeemcaricature from "../assets/caricature.png";

import {
  FaReact,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaMicrosoft,
} from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { SiVercel, SiTypescript, SiCoreldraw } from "react-icons/si";

const WhatIDo = () => {
  return (
    <Section id="Skills">
      <Container>
        <Left
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>What I Do!</Title>

          <Subtitle>My Skills & Expertise</Subtitle>

          <Description>
            I specialize in building clean, modern, and responsive web
            interfaces. My focus is on creating seamless user experiences using
            cutting-edge frontend technologies.
          </Description>

          <Description>
            With a strong foundation in both sports discipline and tech
            innovation, I approach every project with precision, consistency,
            and a drive for excellence.
          </Description>

          <Skills>
            <Skill>
              <FaHtml5 /> HTML
            </Skill>
            <Skill>
              <FaCss3Alt /> CSS
            </Skill>
            <Skill>
              <FaJs /> JavaScript
            </Skill>
            <Skill>
              <FaReact /> React
            </Skill>
            <Skill>
              <SiCoreldraw />
              CorelDraw
            </Skill>
            <Skill>
              <FaGitAlt /> Git
            </Skill>
            <Skill>
              <SiVercel /> Vercel
            </Skill>
            <Skill>
              <FaFigma /> Figma
            </Skill>
            <Skill>
              <FaMicrosoft /> Microsoft 350
            </Skill>
            <Skill>
              <DiPhotoshop /> Photoshop
            </Skill>
          </Skills>
        </Left>

        <Right
          as={motion.div}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image src={qeemcaricature} alt="Akeem caricature" />
        </Right>
      </Container>
    </Section>
  );
};

export default WhatIDo;

const Section = styled.section`
  padding: 100px 0;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #00ff88;
  margin-bottom: 20px;
`;

const Description = styled.p`
  margin-bottom: 15px;
  line-height: 1.6;
  /* color: #ccc; */
  color: #749183;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;

  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Skill = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 10px 16px;
  border-radius: 8px;

  /* background: rgba(255, 255, 255, 0.05); */
  background-color: #cce4d8;
  /* backdrop-filter: blur(10px); */

  font-size: 0.9rem;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: #00ff88;
    color: black;
    transform: translateY(-3px);
  }
`;

const Image = styled.img`
  width: 280px;
  max-width: 100%;
  border-radius: 20px;

  animation: float 4s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
