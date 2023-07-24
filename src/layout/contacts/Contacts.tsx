import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";
import {FormContainer} from "layout/contacts/FormContainer";
import {ListLinks} from "layout/contacts/ListLinks";

export const Contacts = () => {
    return (
        <StyledContacts>
            <FlexWrapper justify={'space-around'}>
                <ContactsLinks>
                    <Title>Let’s Connect</Title>
                    <ListLinks/>
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





