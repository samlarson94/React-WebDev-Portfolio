import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './ContinuedLearningStyles';
import Accordion from 'react-bootstrap/Accordion';

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
< br />
<SectionTitle>Continuing Education</SectionTitle>
<Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Cloud Engineering</Accordion.Header>
    <Accordion.Body>
      Studying for AWS Practicioner exam. Expected pass date August 2022.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</Section>

);

export default ContinuedLearning;
