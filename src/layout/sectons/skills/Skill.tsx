import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

type SkillPropsType = {
    title: string
    description?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} gap={'5'}>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillDescription>{props.description}</SkillDescription>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.li`
    max-width: 440px;
    height: 100%;
    display: flex;
    gap: 35px;

    ::before {
        content: counter(list-item, decimal-leading-zero) '.';
        counter-increment: list-item;
        
        ${font({weight: 100, Fmax: 70, Fmin: 45, color: "secondaryFont"})}
        
        vertical-align: middle;
    }
    
    @media ${theme.media.mobile} {
        gap: 26px;
    }
`

const SkillTitle = styled.h3`
    ${font({weight: 200, Fmax: 30, Fmin: 25, color: 'secondaryFont'})}
`

const SkillDescription = styled.p`
    ${font({weight: 100, Fmax: 18, Fmin: 14, color: 'secondaryFont'})}
`