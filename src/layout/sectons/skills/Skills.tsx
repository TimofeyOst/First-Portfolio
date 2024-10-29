import React from 'react';
import styled from "styled-components";
import {Skill} from "./Skill";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>

            <Container width={'1400'}>
                <SkillsList>
                    <Skill title={'React'}
                           description={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}></Skill>
                    <Skill title={'Styled Components'}
                           description={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}></Skill>
                    <Skill title={'Figma'}
                           description={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}></Skill>
                    <Skill title={'HTML'}
                           description={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}></Skill>
                    <Skill title={'CSS'}
                           description={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}></Skill>
                    <Skill title={'Design'}
                           description={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}></Skill>
                </SkillsList>
            </Container>
            {/*</FlexWrapper>*/}
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    padding-top: 102px;
    padding-bottom: 144px;
    display: flex;
    
    @media ${theme.media.mobile} {
        padding: 42px 15px;
    }
`

const SkillsList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 59px;
    
    list-style-type: none;
    
    @media ${theme.media.mobile} {
        row-gap: 40px;
    }
`
