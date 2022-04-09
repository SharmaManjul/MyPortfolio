import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, JsonText } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <JsonText style={{color:'#A2E8DD'}}>{"{"}</JsonText>
      <JsonText style={{paddingLeft: "5rem", color:'#CACC90'}}>
        <span style={{color:'#E18335'}}>name</span> : Manjul Sharma,<br /> 
        <span style={{color:'#E18335'}}>profession</span> : Software Engineer,<br />        
        <span style={{color:'#E18335'}}>eoy</span> : 2 years @ Calabrio,<br />
        <span style={{color:'#E18335'}}>education</span> : <span style={{color:'#A2E8DD'}}>{"{"}</span>
        <JsonText style={{paddingLeft: "16rem"}}>
          <span style={{color:'#E18335'}}>degree</span> : CS,<br/>
          <span style={{color:'#E18335'}}>university</span> : UMD
        </JsonText>
        <span style={{color:'#A2E8DD'}}>{"},"}</span><br />
        <span style={{color:'#E18335'}}>location</span> : United States,          
      </JsonText>
      <JsonText style={{color:'#A2E8DD'}}>{"}"}</JsonText>
    </LeftSection>
  </Section>
);

export default Hero;