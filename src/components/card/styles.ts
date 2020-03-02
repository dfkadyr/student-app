import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;

    padding: 10px;

    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.shadow};
    border-radius: 4px;

    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;
