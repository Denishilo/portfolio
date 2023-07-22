import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "components/sectionTitle/SectionTitle";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {Project} from "layout/projects/project/Project";
import memoriseImg from '../../images/memorise.jpg'
import plannerImg from '../../images/planner.png'
import socialNetworkImg from '../../images/socialNetwork.jpg'

export const Projects = () => {
    const [myProjects] = useState<MyProjectsType>([
        {
            title:'MEMORISE',
            image:memoriseImg,
            description:'MEMORISE'
        },
        {
            title:'PLANNER',
            image:plannerImg,
            description:'PLANNER'
        },
        {
            title:'SOCIAL NETWORK',
            image:socialNetworkImg,
            description:'SOCIAL NETWORK'
        }
    ])
    return (
        <StyledProjects>
            <SectionTitle> My Projects</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'center'}>
                {myProjects.map(el=><Project key={el.title} title={el.title} image={el.image} description={el.description}/>)}
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: #ae7781;
`
type MyProjectsType = ProjectType[]

type ProjectType = {
    title: string,
    image: string,
    description: string,
}