import React from 'react';
import {useForm} from "react-hook-form";
import styled from "styled-components";
import {FlexWrapper} from "components/flexWrapper/FlexWrapper";

export const FormContainer = () => {
    const form = useForm<FormValues>({
        defaultValues:{
            username:'',
            email:'',
            message:''
        }
    })
    const {register, handleSubmit, formState} = form
    const {errors} = formState
    // const {name, ref, onChange, onBlur} = register('name')
    const onSubmit = (data: FormValues) => {
        console.log('Form submit', data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FlexWrapper direction={'column'}>
                <label htmlFor="username">User name</label>
                <input type="text" id="username" {...register('username', {
                    required: {
                        value: true,
                        message: 'User name is required'
                    }
                })}/>
                <p>{errors.username?.message}</p>

                <label htmlFor="email">User email</label>
                <input type="email" id="email" {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Invalid email format'
                    }
                })}/>
                <p>{errors.email?.message}</p>

                <label htmlFor="message">Message</label>
                <textarea id="message" {...register('message', {
                    required: {
                        value: true,
                        message: 'Message is required'
                    }
                })}></textarea>
                <p>{errors.message?.message}</p>

                <Button>Send message</Button>
            </FlexWrapper>
        </form>
    );
};

type FormValues = {
    username: string,
    email: string,
    message: string
}
const Button = styled.button``
