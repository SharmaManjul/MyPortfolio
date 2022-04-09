import React from 'react';
import {SiMicrosoftazure, SiSpring, SiJest, SiMongodb, SiGit, SiCplusplus, SiTerraform, SiServerless, SiDatadog, SiDocker} from 'react-icons/si'
import {FaNode, FaReact, FaPython, FaJava, FaAws} from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, GridContainer } from './TechnologiesStyles';
import { techs } from '../../constants/constants';

const Technologies = () =>  (
  <Section id="tech">
      <SectionDivider/>
      <SectionTitle style={{paddingTop: "5rem"}}>Technologies</SectionTitle>
      <GridContainer>
        {/* React.js */}
        <ListItem>
          <ListContainer>
            <FaReact size="6rem"/>
          </ListContainer>
        </ListItem>
        {/* nodejs */}
        <ListItem>
          <ListContainer>
            <FaNode size="10rem"/>
          </ListContainer>
        </ListItem>
        {/* Python */}
        <ListItem>
          <ListContainer>
            <FaPython size="6rem"/>
          </ListContainer>
        </ListItem>
        {/* Java */}
        <ListItem>
          <ListContainer>
            <FaJava size="6rem"/>
          </ListContainer>
        </ListItem>
        {/* Spring */}
        <ListItem>
          <ListContainer>
            <SiSpring size="6rem"/>
          </ListContainer>
        </ListItem>
        {/* C++ */}
        <ListItem>
          <ListContainer>
            <SiCplusplus size="6rem"/>
          </ListContainer>
        </ListItem>
        {/* AWS */}
        <ListItem>
          <ListContainer>
            <FaAws size="6rem"/>
          </ListContainer>
        </ListItem>
        {/* Azure */}
        <ListItem>
          <ListContainer>
            <SiMicrosoftazure size="6rem"/>
          </ListContainer>
        </ListItem>
        {/* Terraform */}
        <ListItem>
          <ListContainer>
            <SiTerraform size="6rem"/>
          </ListContainer>
        </ListItem>
        {/* Serverless */}
        <ListItem>
          <ListContainer>
            <SiServerless size="6rem"/>
          </ListContainer>
        </ListItem>
        {/* Mongo */}
        <ListItem>
          <ListContainer>
            <SiMongodb size="6rem"/>
          </ListContainer>
        </ListItem>
        {/* Jest */}
        <ListItem>
          <ListContainer>
            <SiJest size="6rem"/>
          </ListContainer>
        </ListItem>
        {/* Datadog */}
        <ListItem>
          <ListContainer>
            <SiDatadog size="6rem"/>
          </ListContainer>
        </ListItem>
        {/* Git */}
        <ListItem>
          <ListContainer>
            <SiGit size="6rem"/>
          </ListContainer>
        </ListItem>
        {/* Docker */}
        <ListItem>
          <ListContainer>
            <SiDocker size="6rem"/>
          </ListContainer>
        </ListItem>
      </GridContainer>
  </Section>
);

export default Technologies;
