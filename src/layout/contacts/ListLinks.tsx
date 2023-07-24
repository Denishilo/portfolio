import React from 'react';
import styled from "styled-components";

export const ListLinks = () => {
    return (
        <ListLink>
            <ul>
                <li><a href="">LinkedIn</a></li>
                <li><a href="">GitHub</a></li>
                <li><a href="">Telegram</a></li>
                <li><a href="">Codewars</a></li>
            </ul>
        </ListLink>
    );
};

const ListLink = styled.nav`
`