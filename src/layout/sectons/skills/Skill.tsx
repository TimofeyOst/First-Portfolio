import React from 'react';
import styled from "styled-components";

type SkillPropsType = {
    title: string
    description?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillDescription>{props.description}</SkillDescription>
        </StyledSkill>
    );
};

const StyledSkill = styled.li`
    max-width: 325px;
    position: relative;
    
    :before {
        position: absolute;
        top: 40px;
    }
    
    ::marker {
        position: absolute;
        top: 40px;

        font-size: 70px;
        font-weight: 100;
    }
`

const SkillTitle = styled.h3`
    font-size: 30px;
    font-weight: 200;
    
    margin-bottom: 5px;
`

const SkillDescription = styled.p`
    font-size: 18px;
    font-weight: 100;
`