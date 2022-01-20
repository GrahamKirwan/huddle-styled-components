import {StyledHeader, Nav, Logo} from './styles/Header.styled';
import {Button} from './styles/Button.styled';
import {Container} from './styles/Container.styled';
import {Flex} from './styles/Flex.styled';
import { getDefaultNormalizer } from '@testing-library/react';


export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Flex>
                        <Logo src="../images/logo.svg"></Logo>
                        <Button>Try For Free</Button>
                    </Flex>
                </Nav>
            </Container>
        </StyledHeader>
    )
}