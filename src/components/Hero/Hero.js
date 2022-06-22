import React from 'react';

//Import general styled components from Global Components
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
//Import Hero-specific components from HeroStyles.js
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
      Sam Larson <br />
      Full-Stack Web Developer
     </SectionTitle>
     <SectionText>
       Former Construction Manager turned Web Developer.  Well versed in front-end JavaScript development and various frameworks.  Building on the back-end with Node, Express, and MongoDB.
     </SectionText>
     <Button onClick={() => window.location = "mailto:samlarson94@gmail.com"}>Let's Connect</Button>
   </LeftSection>
 </Section>
);

export default Hero;