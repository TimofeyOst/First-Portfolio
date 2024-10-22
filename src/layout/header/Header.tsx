import React from 'react';
import Logo from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

const headerItems = ['Projects', 'About', 'Digital Assets', "Let's Talk"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container width={'1038'}>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo></Logo>
                    <Menu menuItems={headerItems}></Menu>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: white;
    display: flex;
`

