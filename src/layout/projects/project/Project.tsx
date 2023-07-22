import React, {FC} from 'react';
import styled from "styled-components";

export const Project: FC<PropsType> = ({title, image, description}) => {
    return (
        <StyledProject>
            <Image src={image} alt='picture'>

            </Image>
            <Link href={'##'}>

            </Link>
            <Info>
                <span>{title}</span>
                {description}
            </Info>

        </StyledProject>
    );
};

const StyledProject = styled.div`
  max-width: 630px;
  width: 100%;
  margin: 10px;
`

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`
const Link = styled.a`
`
const Info = styled.p`
`

type PropsType = {
    title: string,
    image: string,
    description: string
}