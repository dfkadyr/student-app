import * as React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { IProps } from './interface';
import { Container } from './styles';

export const DatePicker: React.FunctionComponent<IProps> = ({
    label,
    selected,
    onChange,
    name,
}) => {
    return (
        <Container>
            <label>{label}</label>
            <ReactDatePicker
                name={name}
                selected={selected}
                onChange={onChange}
                isClearable
                dateFormat="dd.MM.yyyy"
                className="datepicker"
            />
        </Container>
    );
};
