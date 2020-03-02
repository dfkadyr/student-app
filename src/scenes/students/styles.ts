import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100vh;
`;

export const Container = styled.div`
    width: 900px;
    height: 600px;

    padding: 20px;

    background-color: ${({ theme }) => theme.colors.blue};
    border: 1px solid ${({ theme }) => theme.colors.shadow};
    border-radius: 8px;
    box-shadow: 0px 0px 30px 10px ${({ theme }) => theme.colors.shadow};

    overflow-x: scroll;
`;

export const ButtonContainer = styled.div`
    display: flex;

    margin-top: 30px;

    button {
        &:not(:last-child) {
            margin-right: 15px;
        }
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &:not(:last-child) {
        margin-right: 10px;
    }
`;
