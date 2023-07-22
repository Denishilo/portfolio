import React from 'react';
import styled from "styled-components";
import photo from '../../images/photo.jpeg'
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi there!</span>
                    <Name>I'm Denis Anishchenko</Name>
                    <MainTitle>a Frontend Developer,</MainTitle>
                    <Info>experienced in React/Redux/TypeScript/JavaScript. I’d really love to have an opportunity to do
                        different complicated and absorbing tasks, with an eye to improving my skills. At the exact
                        moment, I’m expanding my knowledge in Next.js and Node.js. </Info>
                </div>
                <Photo src={photo} alt="photo"/>
            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 50vh;
  background-color: antiquewhite;
`

const MainTitle = styled.h1`
`

const Name = styled.h2`
`

const Info = styled.p`
    max-width: 400px;
`


const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
