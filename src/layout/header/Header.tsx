import React from 'react';
import Logo from "../../components/logo/Logo";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";

const headerItems = ['Projects', 'About', 'Digital Assets', "Let's Talk"]
const mobileHeaderItems = ['Projects', 'About', 'Digital Assets']


export const Header = () => {
    return (
        <StyledHeader>
            <Container width={'1038'} >
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo></Logo>
                    <HeaderMenu menuItems={headerItems}></HeaderMenu>
                    <MobileMenu menuItems={mobileHeaderItems}></MobileMenu>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: white;
    
    padding: 20px 0;
    
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
`

