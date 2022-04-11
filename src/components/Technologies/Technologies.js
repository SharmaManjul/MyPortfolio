import React from 'react';
import {SiMicrosoftazure, SiSpring, SiJest, SiMongodb, SiGit, SiCplusplus, SiTerraform, SiServerless, SiDatadog, SiDocker} from 'react-icons/si'
import {FaNode, FaReact, FaPython, FaJava, FaAws} from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, GridContainer, SocialIcons } from './TechnologiesStyles';
import { techs } from '../../constants/constants';

const Technologies = () =>  (
  <Section id="tech">
      <SectionDivider/>
      <SectionTitle style={{paddingTop: "5rem"}}>Technologies</SectionTitle>
      <GridContainer>
        {/* React.js */}
        <ListItem>
          <ListContainer>
            <SocialIcons>
              <FaReact size="6rem" title='React.js'/>
            </SocialIcons>
          </ListContainer>
        </ListItem>
        {/* nodejs */}
        <ListItem>
          <ListContainer>
            <SocialIcons Img={FaNode}>
              <FaNode size="10rem" title='Node.js'/>
            </SocialIcons>
          </ListContainer>
        </ListItem>
        {/* Python */}
        <ListItem>
          <ListContainer>
            <SocialIcons>
              <FaPython size="6rem" title='Python'/>
            </SocialIcons>
          </ListContainer>
        </ListItem>
        {/* Java */}
        <ListItem>
          <ListContainer>
            <SocialIcons>
              <FaJava size="6rem" title='Terraform'/>
            </SocialIcons>
          </ListContainer>
        </ListItem>
        {/* Spring */}
        <ListItem>
          <ListContainer>
            <SocialIcons>
              <SiSpring size="6rem" title='Spring'/>
            </SocialIcons>
          </ListContainer>
        </ListItem>
        {/* C++ */}
        <ListItem>
          <ListContainer>
            <SocialIcons>
              <SiCplusplus size="6rem" title='C++'/>
            </SocialIcons>
          </ListContainer>
        </ListItem>
        {/* AWS */}
        <ListItem>
          <ListContainer>
            <SocialIcons>
            <FaAws size="6rem" title='AWS'/>
            </SocialIcons>
          </ListContainer>
        </ListItem>
        {/* Azure */}
        <ListItem>
          <ListContainer>
            <SocialIcons>
            <SiMicrosoftazure size="6rem" title='Azure'/>
            </SocialIcons>
          </ListContainer>
        </ListItem>
        {/* Terraform */}
        <ListItem>
          <ListContainer>
            <SocialIcons>
            <SiTerraform size="6rem" title='Terraform'/>
            </SocialIcons>
          </ListContainer>
        </ListItem>
        {/* Serverless */}
        <ListItem>
          <ListContainer>
            <SocialIcons>
            <SiServerless size="6rem" title='Serverless'/>
            </SocialIcons>
          </ListContainer>
        </ListItem>
        {/* Mongo */}
        <ListItem>
          <ListContainer>
            <SocialIcons>
            <SiMongodb size="6rem" title='Mongo'/>
            </SocialIcons>
          </ListContainer>
        </ListItem>
        {/* Jest */}
        <ListItem>
          <ListContainer>
            <SocialIcons>
            <SiJest size="6rem" title='Jest'/>
            </SocialIcons>
          </ListContainer>
        </ListItem>
        {/* Datadog */}
        <ListItem>
          <ListContainer>
            <SocialIcons>
            <SiDatadog size="6rem" title='Datadog'/>
            </SocialIcons>
          </ListContainer>
        </ListItem>
        {/* Git */}
        <ListItem>
          <ListContainer>
            <SocialIcons>
            <SiGit size="6rem" title='Git'/>
            </SocialIcons>
          </ListContainer>
        </ListItem>
        {/* Docker */}
        <ListItem>
          <ListContainer>
            <SocialIcons>
            <SiDocker size="6rem" title='Docker'/>
            </SocialIcons>
          </ListContainer>
        </ListItem>
      </GridContainer>
  </Section>
);

export default Technologies;
