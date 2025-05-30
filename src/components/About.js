import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.background};
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutContent = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.primary};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.text};
    margin-bottom: 1.5rem;
  }
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

const SkillItem = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-weight: 500;
  }
`;

const AboutImage = styled(motion.div)`
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const About = () => {
  const skills = [
    'React', 'JavaScript', 'Node.js', 'HTML/CSS',
  ];

  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutContent>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm a self-taught front-end developer with a passion for building clean, intuitive web interfaces.
            Currently based in the Netherlands, I'm focused on deepening my knowledge of React, JavaScript, and modern UI/UX principles.
            I believe that great design is invisible — and strive to write code that enhances usability without getting in the way.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            My approach combines technical expertise with creative problem-solving to deliver
            high-quality, user-friendly applications. I'm constantly learning and adapting
            to new technologies to stay at the forefront of web development.
          </motion.p>
          <SkillsList>
            {skills.map((skill, index) => (
              <SkillItem
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <span>{skill}</span>
              </SkillItem>
            ))}
          </SkillsList>
        </AboutContent>
        <AboutImage
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img src="https://via.placeholder.com/500x600" alt="Profile" />
        </AboutImage>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 