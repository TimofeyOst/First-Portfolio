import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Social} from "./Social";
import {FooterMenu} from "./footerMenu/FooterMenu";

const footerItems = ['Projects', 'About', 'Digital Assets']

export const Footer = () => {
    return (
        <StyledFooter>
            <Container width={'1064'}>
                <FlexWrapper justify={'space-between'}>
                    <FlexWrapper direction={'column'} gap={'20'}>
                        <Icon iconId={'codeLogo'} width={"59"} height={'59'}></Icon>
                        <FooterMenu menuItems={footerItems}></FooterMenu>
                    </FlexWrapper>
                    <Form>
                        <FormHeader>Subscribe to my emailing list</FormHeader>
                        <InputAndButton>
                            <FormInput placeholder={'Enter your email'}></FormInput>
                            <FormButton>Subscribe</FormButton>
                        </InputAndButton>
                        <PrivacyPolicy>By subscribing you agree to with our <a href="">Privacy
                            Policy</a></PrivacyPolicy>
                    </Form>
                </FlexWrapper>


            </Container>

            <Line/>

            <Container width={"1046"}>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <Small>2022 Relume. All right reserved.</Small>
                    <Socials>
                        <Social iconId={'facebook'}></Social>
                        <Social iconId={'instagram'}></Social>
                        <Social iconId={'twitter'}></Social>
                        <Social iconId={'linkedin'}></Social>
                    </Socials>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    //height: 200px;
    display: flex;
    flex-direction: column;
    gap: 64px;
    padding-top: 80px;
    padding-bottom: 55px;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 16px;
`

const FormHeader = styled.h3`
    font-size: 16px;
    font-weight: 700;

`

const InputAndButton = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`

const FormInput = styled.input`
    padding: 12px;
    font-size: 16px;
    color: #505050;
    border: 1px solid black;
`

const FormButton = styled.button`
    font-size: 16px;
    font-weight: 500;

    border: 1px solid black;
    padding: 12px 24px;
`

const PrivacyPolicy = styled.small`
    font-size: 12px;
    text-decoration: black;
`

const Line = styled.hr`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    background-color: black;
`

const Small = styled.small`
    font-size: 14px;
`

const Socials = styled.ul`
    display: flex;
    list-style-type: none;
    gap: 12px;
`