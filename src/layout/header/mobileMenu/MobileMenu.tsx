import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>


            <MobileMenuPopUp isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        console.log(item)
                        if (item === "Let's Talk") {
                            return <ListButton key={index}>
                                <Link href="">{item}</Link>
                            </ListButton>
                        } else {
                            return <ListItem key={index}>
                                <Link href="">{item}</Link>
                            </ListItem>
                        }
                    })

                    }


                </ul>
            </MobileMenuPopUp>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`

const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 300px;
    z-index: 9999;
    background-color: #F1F1F1;

    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;

        li {
            font-size: 16px;
        }
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 30px;
    right: 30px;
    width: 24px;
    height: 24px;
    z-index: 99999;
    

    span {
        display: block;
        margin: auto;
        align-self: center;
        width: 18px;
        height: 1.5px;
        background-color: ${theme.colors.primaryFont};
        border-radius: 10px;
        position: absolute;
        top: 11px;
        left: 3px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        ::before {
            content: '';
            display: block;
            width: 18px;
            height: 1.5px;
            background-color: ${theme.colors.primaryFont};
            border-radius: 10px;
            position: absolute;
            
            transform: translateY(-5px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform:  rotate(-45deg) translateY(0);
                background-color: #4F4F4F;
            `}
        }

        ::after {
            content: '';
            display: block;
            width: 18px;
            height: 1.5px;
            background-color: ${theme.colors.primaryFont};
            border-radius: 10px;
            position: absolute;

            transform: translateY(5px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform:  rotate(45deg) translateY(0);
                background-color: #4F4F4F;
            `}
        }
    }
`

const ListItem = styled.li`

`

const ListButton = styled.li`
    background-color: ${theme.colors.primaryFont};
    padding: 8px 20px;

    a {
        color: ${theme.colors.secondaryFont};
    }

    a:visited {
        color: ${theme.colors.secondaryFont};
    }
`

const Link = styled.a`

`
