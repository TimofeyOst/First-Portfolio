import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

type ProjectPropsType = {
    background: string
    span?: string
    firstPartTitle?: string
    secondPartTitle?: string
    description?: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject background={props.background}>


            <FlexWrapper direction={'column'} gap={'16'}>
                <Topic>{props.span}</Topic>
                <ProjectTitle><ThinTitle>{props.firstPartTitle}_</ThinTitle>{props.secondPartTitle}
                </ProjectTitle>
            </FlexWrapper>
            <FlexWrapper direction={'column'} gap={'40'} justify={'flex-end'} align={'space-'}>
                <ProjectDescription>{props.description}</ProjectDescription>
                <ProjectLink>View More
                    <Icon iconId={"arrowRight"} width={"16"} height={'16'} viewBox={'0 0 16 16'}/>
                </ProjectLink>
            </FlexWrapper>


        </StyledProject>
    );
};

const StyledProject = styled.div<ProjectPropsType>`
    background: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)),
    url(${props => props.background}) no-repeat;
    background-size: cover;
    background-position-x: center;

    min-height: 447px;
    max-height: 619px;
    color: white;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    padding: 92px 46px 100px;

    @media ${theme.media.mobile} {
        padding: 62px 21px 62px;
        height: 619px;
    }
`

const Topic = styled.span`
    font-size: 16px;
    font-weight: 500;
`

const ThinTitle = styled.h3`
    font-weight: 100;
    font-size: inherit;
`

const ProjectTitle = styled.h3`
    ${font({weight: 800, Fmax: 45, Fmin: 43, color: 'secondaryFont'})};

    max-width: 433px;

    white-space: pre-wrap;
    line-height: 120%;
`

const ProjectDescription = styled.p`
    font-size: 18px;
    font-weight: 300;
    line-height: 150%;

    max-width: 433px;

    text-overflow: clip;
    white-space: wrap;
    overflow: hidden;
`

const ProjectLink = styled.a`
    margin-right: auto;
    height: 40px;
    display: flex;
    align-items: center;
    line-height: 150%;
    font-weight: 300;

    cursor: pointer;
`