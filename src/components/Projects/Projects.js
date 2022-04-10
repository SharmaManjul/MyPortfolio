import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle style={{paddingTop: "5rem"}}>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({title, description, image, tags, source, visit, id}) => 
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <Hr />
          <div>
            <TitleContent >Tech Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) =>(
                 <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit} target="_blank" rel="noopener noreferrer">Code</ExternalLinks>
          </UtilityList>
        </BlogCard>
      )}
    </GridContainer>
    <SectionDivider/>
  </Section>
);

export default Projects;