import React from 'react';
import styled from "styled-components";
import {Skill} from "./Skill";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            {/*<FlexWrapper justify={'center'} wrap={'wrap'} gap={'50px'}>*/}
            <Container width={'1336'}>
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
    margin: 0;
    padding-top: 102px;
    padding-bottom: 144px;
`

const SkillsList = styled.ul`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 50px;

    list-style-type: decimal-leading-zero;
`
