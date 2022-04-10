import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText, SocialIcons } from './AcomplishmentsStyles';
import { AiFillMediumCircle } from 'react-icons/ai';
import { GiArchiveResearch } from 'react-icons/gi'
import { FaAws } from 'react-icons/fa'

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
        <Box>
          <SocialIcons href="https://medium.com/@manjul.sharma" target="_blank" rel="noopener noreferrer">
          <AiFillMediumCircle size="5rem"/>
          </SocialIcons>
          <BoxText>Started a tech blog</BoxText>
        </Box>
        <Box>
          <SocialIcons href="https://conservancy.umn.edu/handle/11299/219510" target="_blank" rel="noopener noreferrer">
          <GiArchiveResearch size="5rem"/>
          </SocialIcons>
          <BoxText>Plublished research paper</BoxText>
        </Box>
        <Box>
          <SocialIcons href="https://www.credly.com/badges/0fcd2e60-b459-4780-8fa4-51ca02a80380" target="_blank" rel="noopener noreferrer">
          <FaAws size="5rem"/>
          </SocialIcons>
          <BoxText>AWS CP Certified</BoxText>
        </Box>
    </Boxes>
  </Section>
);

export default Acomplishments;
