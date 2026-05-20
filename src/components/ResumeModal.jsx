import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ResumeModal = ({ isOpen, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && isMobile) {
      window.open("/Akeem_Quadri_Resume.pdf", "_blank");
      onClose();
    }
  }, [isOpen, isMobile, onClose]);

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal
        as={motion.div}
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Close onClick={onClose}>✕</Close>

        {!isMobile && (
          <Iframe src="/Akeem_Quadri_Resume.pdf" title="Akeem Quadri Resume" />
        )}

        <Actions>
          <DownloadBtn
            href="/Akeem_Quadri_Resume.pdf"
            download="Akeem_Quadri_Resume.pdf"
          >
            ⬇ Download Resume
          </DownloadBtn>
        </Actions>
      </Modal>
    </Overlay>
  );
};

export default ResumeModal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Modal = styled.div`
  width: 90%;
  max-width: 900px;
  height: 85vh;
  background: #111;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Close = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: transparent;
  color: white;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  z-index: 10;
`;

const Iframe = styled.iframe`
  flex: 1;
  width: 100%;
  border: none;
`;

const Actions = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  background: #0b0b0b;
`;

const DownloadBtn = styled.a`
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;

  background: linear-gradient(135deg, #00ff88, #00c9ff);
  color: black;

  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 255, 136, 0.4);
  }
`;
