import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {FormContainer} from "layout/contacts/FormContainer";

export const Contacts = () => {
    return (
        <StyledContacts>
            <FlexWrapper justify={'space-around'}>
                <ContactsLinks>
                    <Title>Let’s Connect</Title>
                    <ListLink>
                        <ul>
                            <li><a href="">LinkedIn</a></li>
                            <li><a href="">GitHub</a></li>
                            <li><a href="">Telegram</a></li>
                            <li><a href="">Codewars</a></li>
                        </ul>
                    </ListLink>
                </ContactsLinks>
                <FormContainer/>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  background-color: #dc6f4f;
  min-height: 60vh;
`
const ContactsLinks = styled.div``

const Title = styled.h3``

const ListLink = styled.nav`
`



