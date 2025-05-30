import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.body};
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ThemeToggle = styled.button`
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

const Navbar = ({ toggleTheme, theme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav style={{ padding: scrolled ? '0.5rem 2rem' : '1rem 2rem' }}>
      <NavContainer>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </Logo>
        <NavLinks>
          <NavLink href="#about" whileHover={{ scale: 1.1 }}>About</NavLink>
          <NavLink href="#projects" whileHover={{ scale: 1.1 }}>Projects</NavLink>
          <NavLink href="#skills" whileHover={{ scale: 1.1 }}>Skills</NavLink>
          <NavLink href="#contact" whileHover={{ scale: 1.1 }}>Contact</NavLink>
          <ThemeToggle onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </ThemeToggle>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 