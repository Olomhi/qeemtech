import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Section id="Contact">
      <Container>
        <Title
          as={motion.h2}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Let’s Build Something Great!
        </Title>

        <Subtitle>
          Available for collaborations, freelance projects, and creative ideas.
        </Subtitle>

        <NavLinks>
          <NavButton onClick={() => scrollToSection("Home")}>Home</NavButton>

          <NavButton onClick={() => scrollToSection("Tech")}>
            Projects
          </NavButton>

          <NavButton onClick={() => scrollToSection("Sports")}>
            Sports
          </NavButton>
        </NavLinks>

        <Icons>
          <Icon
            href="https://wa.me/2348156684562"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </Icon>

          <Icon
            href="mailto:officialqeemtech@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </Icon>

          <Icon
            href="https://github.com/olomhi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Icon>

          <Icon
            href="https://x.com/qeem_tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </Icon>

          <Icon
            href="https://instagram.com/qeem_tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Icon>

          <Icon
            href="https://facebook.com/Akeem Babatunde"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </Icon>
        </Icons>

        <FooterText>
          © 2026 QEEM-Tech. Built with passion, discipline, and creativity.
        </FooterText>
      </Container>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #041812, #071d1a);
  overflow: hidden;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  color: #bdbdbd;
  text-align: center;
  max-width: 650px;
  line-height: 1.8;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 50px;
`;

const NavButton = styled.button`
  padding: 12px 22px;
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.04);
  color: white;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  transition: 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #00ff88, #00c9ff);
    color: black;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 255, 136, 0.2);
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
  margin-bottom: 50px;
`;

const Icon = styled.a`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #00ff88;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.35s ease;

  &:hover {
    transform: translateY(-6px) scale(1.05);
    background: linear-gradient(135deg, #00ff88, #00c9ff);
    color: black;
    box-shadow: 0 15px 35px rgba(0, 255, 136, 0.3);
  }

  @media (max-width: 768px) {
    width: 58px;
    height: 58px;
    font-size: 1.3rem;
  }
`;

const FooterText = styled.p`
  color: #777;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.7;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  width: 100%;
  padding-top: 30px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
