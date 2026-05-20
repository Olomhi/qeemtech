import styled from "styled-components";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaArrowRight, FaRunning } from "react-icons/fa";
import { useState } from "react";
import ResumeModal from "./ResumeModal";
import heroImg from "../assets/Akeem.jpg";

const Hero = () => {
  const [openResume, setOpenResume] = useState(false);
  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (!element) return;

      const offset = 80;

      const position =
        element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section id="Home">
      <Container>
        <Left
          as={motion.div}
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>
            BUILT BY <span>DISCIPLINE</span>
          </Title>

          <Subtitle>
            Frontend Engineer • Athlete • Agriculture Enthusiast
          </Subtitle>

          <Buttons>
            <PrimaryBtn onClick={() => scrollToSection("Sports")}>
              View Journey <FaRunning />
            </PrimaryBtn>
            <SecondaryBtn onClick={() => scrollToSection("Tech")}>
              View Projects <FaArrowRight />
            </SecondaryBtn>
            <ResumeButton onClick={() => setOpenResume(true)}>
              View Resume
            </ResumeButton>
          </Buttons>
          <ResumeModal
            isOpen={openResume}
            onClose={() => setOpenResume(false)}
          />
        </Left>

        <Right
          as={motion.div}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={heroImg} alt="hero" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 30px;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;

  span {
    color: #00ff88;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  margin-top: 20px;
  font-size: 1.25rem;
  margin-bottom: 15px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PrimaryBtn = styled.button`
  padding: 12px 24px;
  border: none;
  background: #00ff88;
  color: black;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 255, 136, 0.4);
  }
`;

const SecondaryBtn = styled.button`
  padding: 12px 24px;
  border: 1px solid #00ff88;
  background: transparent;
  color: inherit;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    background: #00ff88;
    color: black;
  }
`;

const ResumeButton = styled.button`
  padding: 14px 28px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  cursor: pointer;

  background: linear-gradient(135deg, #00ff88, #00c9ff);
  color: black;

  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 255, 136, 0.4);
  }
`;

const Image = styled.img`
  width: 80%;
  max-width: 400px;

  @media (max-width: 768px) {
    width: 70%;
  }
`;
