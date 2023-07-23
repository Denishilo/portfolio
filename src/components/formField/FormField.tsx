import React, {FC} from 'react';
import styled from "styled-components";
import {ChangeHandler, RefCallBack} from "react-hook-form";

export const FormField: FC<PropsType> = ({type, name, ref, onBlur, onChange}) => {

    return (
        <StyledFormField>
            <label>
                {type === 'textarea' ? <textarea name={name}></textarea> :
                    <input required type={type} name={name} ref={ref} onChange={onChange} onBlur={onBlur}/>}
            </label>
        </StyledFormField>
    );
};

type PropsType = {
    type: string,
    name: string,
    ref?: RefCallBack,
    onChange?:ChangeHandler,
    onBlur?: ChangeHandler,
}

const StyledFormField = styled.div`

`

