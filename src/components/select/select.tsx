import * as React from 'react';

import ReactSelect from 'react-select';

import { IProps } from './interface';
import { Container } from './styles';

export const Select: React.FunctionComponent<IProps> = ({
    label,
    name,
    options,
    value,
    onChange,
    className,
}) => {
    return (
        <Container>
            <label>{label}</label>
            <ReactSelect
                name={name}
                options={options}
                value={value}
                onChange={onChange}
                className={className}
            />
        </Container>
    );
};
