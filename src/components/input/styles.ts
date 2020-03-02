import styled from 'styled-components';

export const StyledInput = styled.input`
    padding: 10px;

    font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    label {
        margin-bottom: 5px;
    }
`;
