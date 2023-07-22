import React, {FC} from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {Icon} from "components/icon/Icon";

export const Skill: FC<PropsType> = ({title}) => {
    return (
        <SkillStyled>
            <FlexWrapper direction={'column'}>
                <Icon iconId={title}/>
                <SkillTitle>
                    {title}
                </SkillTitle>
            </FlexWrapper>

        </SkillStyled>
    );
};

const SkillStyled = styled.div`
  width: 30%;
  background-color: antiquewhite;
  margin: 10px;
`
const SkillTitle = styled.p`
`
type PropsType = {
    title: string
}