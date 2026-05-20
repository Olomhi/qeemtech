import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SportsModal = ({ data, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data) {
      setCurrentIndex(data.index);
    }
  }, [data]);

  const nextImage = () => {
    if (!data) return;

    setCurrentIndex((prev) => (prev === data.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    if (!data) return;

    setCurrentIndex((prev) => (prev === 0 ? data.images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!data) return;

      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [data]);

  if (!data) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal
        as={motion.div}
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{ duration: 0.35 }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>✕</CloseButton>

        <ImageWrapper>
          <Image
            src={data.images[currentIndex].src}
            alt={data.images[currentIndex].caption}
          />
        </ImageWrapper>

        <Caption>{data.images[currentIndex].caption}</Caption>

        <Navigation>
          <NavButton onClick={prevImage}>
            <FaChevronLeft />
          </NavButton>

          <Counter>
            {currentIndex + 1} / {data.images.length}
          </Counter>

          <NavButton onClick={nextImage}>
            <FaChevronRight />
          </NavButton>
        </Navigation>
      </Modal>
    </Overlay>
  );
};

export default SportsModal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(8px);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
  z-index: 9999;
`;

const Modal = styled.div`
  width: 100%;
  max-width: 900px;

  background: #0d0d0d;

  border-radius: 24px;
  overflow: hidden;

  position: relative;

  display: flex;
  flex-direction: column;

  border: 1px solid rgba(255, 255, 255, 0.06);

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;

  top: 18px;
  right: 18px;

  width: 42px;
  height: 42px;

  border: none;
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.6);

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

const ImageWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: black;
`;

const Image = styled.img`
  width: 100%;
  max-height: 75vh;

  object-fit: contain;

  display: block;
`;

const Caption = styled.p`
  padding: 20px;

  color: white;

  text-align: center;

  font-size: 1rem;
  line-height: 1.7;

  background: #111;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;

  padding: 20px;

  background: #0b0b0b;
`;

const NavButton = styled.button`
  width: 48px;
  height: 48px;

  border: none;
  border-radius: 50%;

  background: linear-gradient(135deg, #00ff88, #00c9ff);

  color: black;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;

  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 10px 25px rgba(0, 255, 136, 0.35);
  }
`;

const Counter = styled.div`
  color: #bdbdbd;

  font-size: 0.95rem;
  font-weight: 600;
`;
