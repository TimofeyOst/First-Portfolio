import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

type ProjectPropsType = {
    background: string
    span?: string
    title?: string
    description?: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject background={props.background}>
            {/*<Container width={'947'}>*/}
                <FlexWrapper justify={'space-between'}>
                    <FlexWrapper direction={'column'} gap={'16'}>
                        <Topic>{props.span}</Topic>
                        <ProjectTitle>{props.title}</ProjectTitle>
                    </FlexWrapper>
                    <FlexWrapper direction={'column'} gap={'24'} justify={'flex-end'}>
                        <ProjectDescription>{props.description}</ProjectDescription>
                        <ProjectLink>View More
                            <Icon iconId={"arrowRight"} width={"16"} height={'16'} viewBox={'0 0 16 16'}/></ProjectLink>
                    </FlexWrapper>
                </FlexWrapper>
            {/*</Container>*/}
        </StyledProject>
    );
};

const StyledProject = styled.div<ProjectPropsType>`
    background: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)),
            url(${props => props.background});
    min-height: 447px;
    color: white;
    
    padding: 92px 46px 100px;
    
    height: 100%;
`

const Topic = styled.span`
    font-size: 16px;
    font-weight: 500;
`

const ProjectTitle = styled.h3`
    font-size: 45px;
    max-width: 433px;

    white-space: pre-wrap;
    line-height: 120%;
    
    :first-line {
        font-weight: 200;
    }
`

const ProjectDescription = styled.p`
    font-size: 18px;
    font-weight: 300;
    line-height: 150%;
    
    max-width: 433px;
`

const ProjectLink = styled.a`
    margin-right: auto;
    height: 40px;
    display: flex;
    align-items: center;
    
    cursor: pointer;
`