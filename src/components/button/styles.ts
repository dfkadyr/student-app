import styled from 'styled-components';

export const StyledButton = styled.button<{ mode: string }>`
    padding: 10px;

    font-size: ${({ theme }) => theme.fontSizes.big};

    background-color: ${({ theme, mode }) =>
        mode === 'delete' ? theme.colors.red : theme.colors.green};

    cursor: pointer;
`;
