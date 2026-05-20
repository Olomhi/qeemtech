import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal
        as={motion.div}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Close onClick={onClose}>✕</Close>

        <Image src={project.image} alt={project.title} />

        <Content>
          <h2>{project.title}</h2>

          <p>{project.desc}</p>

          <Tags>
            {project.tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </Tags>

          <Buttons>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
              Live Demo
            </a>

            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
              GitHub
            </a>
          </Buttons>
        </Content>
      </Modal>
    </Overlay>
  );
};

export default ProjectModal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  z-index: 9999;
`;

const Modal = styled.div`
  width: 100%;
  max-width: 800px;

  max-height: 90vh;
  overflow-y: auto;

  background: #111;
  border-radius: 20px;

  position: relative;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #00ff88;
    border-radius: 10px;
  }
`;

const Close = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;

  width: 38px;
  height: 38px;

  border: none;
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.7);
  color: white;

  font-size: 1rem;
  cursor: pointer;

  z-index: 10;
  transition: 0.3s ease;

  &:hover {
    background: #00ff88;
    color: black;
    transform: rotate(90deg);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 220px;
  }
`;

const Content = styled.div`
  padding: 25px;
  color: #ccc;

  h2 {
    color: white;
    margin-bottom: 15px;
  }

  p {
    line-height: 1.8;
    margin-bottom: 20px;
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

const Buttons = styled.div`
  margin-top: 30px;

  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  a {
    flex: 1;
    min-width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    background: #00ff88;
    color: black;
    transition: 0.3s;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;
