import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";



export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index)=>{
                    console.log(item)
                    if (item === "Let's Talk") {
                        return <MainButton key={index}>
                            <a href="">{item}</a>
                        </MainButton>
                    } else {
                        return <li key={index}>
                            <a href="">{item}</a>
                        </li>
                    }
                })

                }


            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        align-items: center;
        gap: 32px;
        
        li {
            font-size: 16px;
        }
    }
`

const MainButton = styled.li`
    background-color: ${theme.colors.primaryFont};
    padding: 8px 20px;
    
    a {
        color: ${theme.colors.secondaryFont};
    }
    
    a:visited {
        color: ${theme.colors.secondaryFont};
    }
`