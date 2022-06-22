import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectInformation = [{
  title: 'Project 1',
  description: 'Description Here',
  image: "", 
  tags: [],
  source: "",
  visit: "",
  id: 0,
},{
  title: 'Project 2',
  description: 'Description Here',
  image: "", 
  tags: [],
  source: "",
  visit: "",
  id: 1,
},{
  title: 'Project 3',
  description: 'Description Here',
  image: "", 
  tags: [],
  source: "",
  visit: "",
  id: 2,
},{
  title: 'Project 4',
  description: 'Description Here',
  image: "", 
  tags: [],
  source: "",
  visit: "",
  id: 3,
}];


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key = {id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
          </TitleContent>
          <CardInfo>
            {description}
            
            <div>
              <br />
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>View App</ExternalLinks>
              <ExternalLinks href={source}>View Code</ExternalLinks>
            </UtilityList>
          </CardInfo>
        </BlogCard>
      ))}
    </GridContainer>
    </Section>
);

export default Projects;