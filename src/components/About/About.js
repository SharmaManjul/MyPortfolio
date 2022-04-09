import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () => (
<Section id="about">
    <SectionDivider/>
    <SectionTitle style={{paddingTop: "5rem", paddingBottom: "1rem"}}>About</SectionTitle>
    <SectionText>
        I am a full stack sofwtare developer with experience in building and maintaining 
        entire SaaS stacks. A big Cloud enthusiast with knowledge in serverless architecture 
        and best practices.
    </SectionText>
    <SectionText>
    Learning is my passion and coding is how I express it :)
    </SectionText>
</Section>

);

export default About;