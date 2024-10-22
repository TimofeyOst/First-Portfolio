import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import Photo from '../../../assets/images/photo.jpg';
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container width={'1130'} marginTop={"133"}>
                <FlexWrapper direction={'row'} align={'flex-start'} justify={'space-between'}>
                    <TitleGroup>
                        <MainTitle>HELLO I’M TIM</MainTitle>
                        <h1>Web Developer from Belarus</h1>
                    </TitleGroup>

                    <MainPhoto>
                        <Square></Square>
                        <Image
                            src={Photo}
                            alt=""/>
                    </MainPhoto>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 90vh;

`

const TitleGroup = styled.div`
    max-width: 650px;
    position: absolute;
    left: 0;
    z-index: 2;
`

const MainTitle = styled.span`
    font-size: 150px;
    font-weight: 800;

`


const MainPhoto = styled.div`
    margin-left: auto;
    z-index: 1;
    position: relative;
`

const Square = styled.div`
    background-color: #E7E7E7;
    width: 570px;
    height: 570px;
    position: absolute;
    transform: rotate(-8.7deg);
`

const Image = styled.img`
    width: 570px;
    height: 570px;
    transform: rotate(7.52deg);
    //position: absolute;
`