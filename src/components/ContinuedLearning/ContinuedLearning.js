import React from 'react';
import styled from 'styled-components';

import { Section, SectionDivider, SectionTitle, SectionTitle2, EdList, EdListItem } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './ContinuedLearningStyles';
import Accordion from 'react-bootstrap/Accordion';
import { ListItem } from '../Technologies/TechnologiesStyles';

const data = [
  { title: 'Artificial Intelligence & Machine Learning', text: 'University of Texas'},
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
  //         <BoxNum >{card.title}</BoxNum>
  //         <SectionTitle2 >{card.text}</SectionTitle2>
  //       </Box>
  //     ))}
  //   </Boxes>
  // </Section>
<Section>
  <SectionTitle>Continuing Education</SectionTitle>
    <EdList nopadding>
      <EdListItem>University of Texas: Machine Learning & Artificial Intelligence Post Graduate Program (2023)</EdListItem>
    </EdList>
</Section>
);

/* <Section>
< SectionDivider />

<SectionTitle style={{marginTop: "50px"}}>Continuing Education</SectionTitle>
<List>
  <ListItem>University of Texas: Machine Learning & Artificial Intelligence Post Graduate Program</ListItem>
  <ListItem>UC San Diego - MicroMasters in Algorithms and Data Structures
    <ul>
      <li>Working on MicroMasters program to expand my knowledge on designing algorithms and data structures.</li>
    </ul>
  </ListItem>
</List>
</Section> */


export default ContinuedLearning;
