import React from 'react';
import { IProps } from './interface';
import { Wrapper } from './styles';

export const Card: React.FunctionComponent<IProps> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};
