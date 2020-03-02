import * as React from 'react';

import { IProps } from './interface';
import { StyledInput, Container } from './styles';

export const Input: React.FunctionComponent<IProps> = ({ label, name, value, onChange }) => {
    return (
        <Container>
            <label>{label}</label>
            <StyledInput name={name} value={value} onChange={onChange} />
        </Container>
    );
};
