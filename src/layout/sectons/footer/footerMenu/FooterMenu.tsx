import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";



export const FooterMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledFooterMenu>
            <ul>
                {props.menuItems.map((item, index)=>{
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
        </StyledFooterMenu>
    );
};

const StyledFooterMenu = styled.nav`
    ul {
        display: flex;
        align-items: center;
        gap: 32px;

        li {
            font-size: 16px;
        }
    }

    @media ${theme.media.tablet} {
        display: none;
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