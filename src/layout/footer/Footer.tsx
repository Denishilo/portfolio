import React from 'react';
import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
            <CopyRight/>© 2023 Denis Anishchenko, All Rights Reserved.

        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
  min-height: 200px;
  background-color: #82adb3;
  text-align: center;
`
const CopyRight = styled.small`
`

