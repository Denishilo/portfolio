import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "components/sectionTitle/SectionTitle";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {Skill} from "layout/skills/Skill";

export const MySkills = () => {
    const [skillsList] = useState<Array<string>>(['JAVA SCRIPT', 'TYPE SCRIPT', 'REACT', 'REDUX', 'JEST','STYLED COMPONENTS', 'CSS', 'HTML'])
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper justify={'space-between'} wrap={'wrap'}>
                { skillsList.map(el => <Skill key={el} title={el}/>) }
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #e4dfe9;
  margin: 0 auto;
  min-height: 80vh;
`