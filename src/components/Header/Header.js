import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMediumCircle } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, BlinkingUnderscore } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <BsCodeSlash size="3rem" color='#60992D'/>
          <Span style={{ color: "#C8E0F4" }}>Portfolio</Span>
          <BlinkingUnderscore style={{ color: "#C8E0F4" }}>_</BlinkingUnderscore>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <text style={{paddingTop: "15px"}}>|</text>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <text style={{paddingTop: "15px"}}>|</text>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/SharmaManjul" target="_blank" rel="noopener noreferrer">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/manjul-sharma/" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://medium.com/@manjul.sharma" target="_blank" rel="noopener noreferrer">
        <AiFillMediumCircle size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
