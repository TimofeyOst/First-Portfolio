import React from 'react';
import styled from "styled-components";
import Photo from '../../../assets/images/photo.jpg';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container width={"1035"}>
                <FlexWrapper justify={'space-between'}>
                    <FlexWrapper direction={'column'} gap={'16'}>
                        <AboutMeTitle>About Me</AboutMeTitle>
                        <AboutMeSpan>I look at usual things with my unsual eyes.</AboutMeSpan>
                        <FirstPhoto src={Photo} alt=""/>
                    </FlexWrapper>
                    <FlexWrapper direction={'column'}>
                        <AboutMeDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
                            faucibus massa
                            sollicitudin amet
                            augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
                            scelerisque ac
                            adipiscing velit non nulla in amet pellentesque.
                            Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
                            Amet
                            pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec,
                            habitasse
                            vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla
                            arcu aliquet
                            fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta.
                            Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in
                            eleifend
                            dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra
                            lectus arcu,
                            tincidunt ultrices pellentesque.</AboutMeDescription>
                        <SecondPhoto src={Photo} alt=""/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    min-height: 1470px;
    padding-top: 109px;
    padding-bottom: 205px;
`

const AboutMeTitle = styled.h2`
    font-size: 16px;
    font-weight: 800;
`

const AboutMeSpan = styled.p`
    font-size: 48px;
    font-weight: 200;
    line-height: 120%;
    text-transform: uppercase;
    max-width: 422px;
`


const FirstPhoto = styled.img`
    max-width: 532px;
`

const AboutMeDescription = styled.p`
    max-width: 437px;
`

const SecondPhoto = styled.img`
    max-width: 440px;
`