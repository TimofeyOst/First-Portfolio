import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";



export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
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
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
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
    padding: 10px 20px;
    font-weight: 300;
    
    a {
        color: ${theme.colors.secondaryFont};
    }
    
    a:visited {
        color: ${theme.colors.secondaryFont};
    }
`

const Link = styled.a`

`
