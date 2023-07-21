import React from 'react';
import styled from "styled-components";
import photo from '../../images/photo.jpeg'

export const Main = () => {
    return (
        <div>
            <div>
                <span>Hi there!</span>
                <span>I'm Denis Anishchenko</span>
                <h1>a Frontend Developer,</h1>
                <p>experienced in React/Redux/TypeScript/JavaScript. I’d really love to have an opportunity to do
                    different complicated and absorbing tasks, with an eye to improving my skills. At the exact moment,
                    I’m expanding my knowledge in Next.js and Node.js. </p>
            </div>
            <Photo src={photo} alt="photo"/>
        </div>
    );
};

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
