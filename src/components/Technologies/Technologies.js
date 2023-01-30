import React from 'react';
import { DiCompass, DiFirebase, DiReact, DiZend, DiJavascript } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    < br />
    < br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world, from front-end to back-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Django, React.js, Next.js, JavaScript, Python, jQuery, HTML/CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Django, Node.js, Express.js, MongoDB, MySQL, GraphQL, Heroku
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma, Adobe Creative Suite, Canva
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCompass size="3rem" />
        <ListContainer>
          <ListTitle>Business Applications</ListTitle>
          <ListParagraph>
            Saleforce Admin <br />
            Webhook Email Automation <br /> Microsoft PowerBI and PowerApps
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>Extensive Experience With:</ListTitle>
          <ListParagraph>
            Salesforce API<br /> Procore API
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
    </Section>
);

export default Technologies;
