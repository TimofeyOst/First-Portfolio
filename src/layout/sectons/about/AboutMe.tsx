import React from 'react';
import styled from "styled-components";
import Photo from '../../../assets/images/photo.jpg';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container width={"1065"}>
                <FlexWrapper justify={'space-between'}  wrap={'wrap'}>
                    <Div>
                        <FlexWrapper direction={'column'} justify={'space-between'} gap={'16'}>
                            <FlexWrapper gap={'16'} direction={'column'}>
                                <AboutMeTitle>About Me</AboutMeTitle>
                                <AboutMeSpan>I look at usual things with my unsual eyes.</AboutMeSpan>
                            </FlexWrapper>
                            <FirstPhoto src={Photo} alt=""/>
                        </FlexWrapper>
                    </Div>

                    <FlexWrapper direction={'column'} justify={'space-between'} align={'flex-end'}>
                        <AboutMeDescription>
                            <DescriptionParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
                                faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu
                                neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet
                                pellentesque.</DescriptionParagraph>
                            <br/>
                            <DescriptionParagraph>Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
                                eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus.
                                Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus,
                                a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus
                                urna, nam risus nec elementum cras porta.</DescriptionParagraph>
                            <br/>
                            <DescriptionParagraph>Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar
                                vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit.
                                Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices
                                pellentesque.</DescriptionParagraph>
                        </AboutMeDescription>
                        <SecondPhoto src={Photo} alt=""/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    min-height: 100vh;

    padding-top: 109px;
    padding-bottom: 205px;
    
    display: flex;
    
    @media ${theme.media.mobile} {
        padding: 49px 4px 95px;
    }
`

const Div = styled.div`
    max-height: 950px;
    height: 100%;

    margin-bottom: 41px;
`



const AboutMeTitle = styled.h2`
    font-size: 16px;
    font-weight: 800;
`

const AboutMeSpan = styled.span`
    ${font({weight: 200, Fmax: 48, Fmin: 43, color: 'secondaryFont'})}}
    text-transform: uppercase;
    max-width: 422px;
`


const FirstPhoto = styled.img`
    max-width: 532px;
    
    @media ${theme.media.mobile} {
        width: 305px;
    }
`

const AboutMeDescription = styled.div`
    max-width: 400px;
    //margin-bottom: 61px;
`

const DescriptionParagraph = styled.p`
    line-height: 150%;
    font-size: 18px;
    font-weight: 300;
`

const SecondPhoto = styled.img`
    max-width: 440px;

    @media ${theme.media.mobile} {
        width: 276px;
    }
`