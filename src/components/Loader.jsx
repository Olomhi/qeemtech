import styled from "styled-components";
import { motion } from "framer-motion";
import Qeem1 from "../assets/qeem1.png";

const Loader = ({ onFinish }) => {
  return (
    <Wrapper
      as={motion.div}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.5, ease: "easeInOut" }}
      onAnimationComplete={onFinish}
    >
      <Logo
        as={motion.img}
        src={Qeem1}
        alt="logo"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: [0.6, 1.1, 1], opacity: [0, 1, 1] }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled(motion.div)`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Logo = styled(motion.img)`
  width: 90%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
