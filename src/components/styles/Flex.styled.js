import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;

    & > div {
        flex: 1;
    }

    @media (max-width: ${(props) => props.theme.mobile}) {
        flex-direction: column;
        text-align: center;
    }

`