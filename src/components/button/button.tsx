import * as React from 'react';

import { IProps } from './interface';
import { StyledButton } from './styles';

export const Button: React.FunctionComponent<IProps> = ({ children, mode, onClick }) => {
    return (
        <StyledButton mode={mode} onClick={onClick}>
            {children}
        </StyledButton>
    );
};
