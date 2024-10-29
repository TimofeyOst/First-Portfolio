import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import Photo from '../../../assets/images/photo.jpg';
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container width={'1130'}>
                <FlexWrapper direction={'row'} align={'flex-start'} justify={'space-evenly'} wrap={'wrap'}>
                    <TitleGroup>
                        <Name>HELLO I’M TIM</Name>
                        <MainTitle>Web Developer from Belarus</MainTitle>

                        {/*<CurveSvg viewBox="0 0 650 190" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <path id="curve" d="M 0 0 A 200 100 0 0 0 650 0" fill="none"/>*/}
                        {/*    <text>*/}
                        {/*        <textPath href="#curve" startOffset="0%" textLength="120%">*/}
                        {/*            Web Developer from Belarus*/}
                        {/*        </textPath>*/}
                        {/*    </text>*/}
                        {/*</CurveSvg>*/}

                    </TitleGroup>


                    <MainPhotoGroup>
                        <Image
                            src={Photo}
                            alt=""/>
                    </MainPhotoGroup>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 98vh;
    display: flex;

    padding-top: 222px;

    @media ${theme.media.tablet} {
        padding-top: 110px;
    }

`

const TitleGroup = styled.div`
    width: 650px;
    position: absolute;
    left: 0;
    z-index: 5;
    //width: 400px;

    @media ${theme.media.tablet} {
        position: relative;
    }
`

const Name = styled.span`
    ${font({weight: 800, Fmax: 150, Fmin: 75, lineHeight: 1.17})};
    width: 100%;
    
`

const MainTitle = styled.h1`
    ${font({weight: 700, Fmax: 52, Fmin: 28})}
`

const Image = styled.img`
    width: 570px;
    height: 570px;
    transform: rotate(15deg);
    position: absolute;
    
    

    @media ${theme.media.mobile} {
        width: 300px;
        height: 300px;
    }
`

const MainPhotoGroup = styled.div`
    margin-left: auto;
    z-index: 1;
    position: relative;

    width: 550px;

    :after {
        content: '';
        display: block;
        background-color: #E7E7E7;
        width: 570px;
        height: 570px;
        transform: rotate(-8.7deg);
        z-index: -1;
        position: absolute;

        @media ${theme.media.mobile} {
            width: 300px;
            height: 300px;
        }
    }

    @media ${theme.media.tablet} {
        margin-top: 30px;
    }
`
