import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
// import { Box, Boxes, BoxNum, BoxText } from './ContinuedLearningStyles';
import Accordion from 'react-bootstrap/Accordion';
import { ListItem } from '../Technologies/TechnologiesStyles';

const data = [
  { title: 'Cloud Engineering', text: 'AWS Practitioner'},
  { title: 'Computer Science for Web Programming', text: 'Harvard University' },
  { title: 'MicroMasters in Algorithms and Data Structures', text: 'UC San Diego'}
];

const ContinuedLearning = () => (
  // <Section>
  //   < SectionDivider />
  //   < br />
  //   <SectionTitle>Continuing Education</SectionTitle>
  //   <Boxes>
  //     {data.map((card, index) => (
  //       <Box key={index}>
  //         <BoxNum>{card.title}</BoxNum>
  //         <BoxText>{card.text}</BoxText>
  //       </Box>
  //     ))}
  //   </Boxes>
  // </Section>

<Section>
< SectionDivider />

<SectionTitle style={{marginTop: "50px"}}>Continuing Education</SectionTitle>
{/* <List>
  <ListItem>Cloud Engineering</ListItem>
  <ListItem>Cloud Engineering</ListItem>
  <ListItem>Cloud Engineering</ListItem>
</List> */}
<Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>University of Texa: Machine Learning & Artificial Intellegence PG Program</Accordion.Header>
    <Accordion.Body>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>UC San Diego - MicroMasters in Algorithms and Data Structures</Accordion.Header>
    <Accordion.Body>
     Working on MicroMasters program to expand my knowledge on designing algorithms and data structures.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</Section>

);

export default ContinuedLearning;
