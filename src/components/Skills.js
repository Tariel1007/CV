import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiRedux, SiTailwindcss, SiNextdotjs, SiStyledcomponents } from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.body};
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.primary};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text};

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};
  }

  span {
    font-weight: 500;
  }
`;

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Technologies',
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'HTML5', icon: <FaHtml5 /> }
      ]
    },
    {
      title: 'Styling & UI',
      skills: [
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Sass', icon: <FaSass /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
        { name: 'Styled Components', icon: <SiStyledcomponents /> }
      ]
    },
    {
      title: 'Tools & Libraries',
      skills: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'Figma', icon: <FaFigma /> }
      ]
    }
  ];

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Frontend Skills
        </SectionTitle>
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills; 