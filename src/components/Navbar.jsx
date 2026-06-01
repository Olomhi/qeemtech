import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import Qeem1 from "../assets/Qeem1reverse.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const sections = [
    "Home",
    "Skills",
    "Sports",
    "Tech",
    "Agriculture",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
      setOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(id);

      if (!element) return; // safety check

      const offset = 80;

      const position =
        element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }

    setOpen(false);
    setActive(id);
  };

  return (
    <Nav>
      <Logo
        as={motion.div}
        onClick={() => scrollToSection("home")}
        initial={{ opacity: 0, y: -40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={Qeem1} alt="QEEM-Tech Logo" />
      </Logo>

      <MenuIcon onClick={() => setOpen(!open)}>
        {open ? "X" : <FaBars />}
      </MenuIcon>

      <Links open={open}>
        {sections.map((item) => (
          <li
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => scrollToSection(item)}
          >
            {item}
          </li>
        ))}
      </Links>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: fixed;
  width: 100%;
  top: 0;
  height: 70px;
  z-index: 1000;
  background: linear-gradient(135deg, #041812, #071d1a);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Logo = styled.div`
  width: 150px;
  height: 90px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Links = styled.ul`
  display: flex;
  gap: 25px;
  list-style: none;

  li {
    cursor: pointer;
    transition: 0.3s;
    position: relative;
    color: white;

    &:hover {
      color: #00ff88;
    }
  }
  .active {
    color: #00ff88;
  }

  .active::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #00ff88;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: 0;
    height: calc(100vh - 70px);
    width: 200px;
    background: linear-gradient(135deg, #041812, #071d1a);
    flex-direction: column;
    padding: 20px;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    transition: 0.3s;
  }
`;
