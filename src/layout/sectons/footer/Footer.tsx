import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Social} from "./Social";

const footerItems = ['Projects', 'About', 'Digital Assets']

export const Footer = () => {
    return (
        <StyledFooter>
            <Container width={'1064'}>
                <FlexWrapper justify={'space-between'}>
                    <FlexWrapper direction={'column'} gap={'20'}>
                        <Icon iconId={'codeLogo'} width={"59"} height={'59'}></Icon>
                        <Menu menuItems={footerItems}></Menu>
                    </FlexWrapper>
                    <Form>
                        <FormHeader>Subscribe to my emailing list</FormHeader>
                        <InputButton>
                            <FormInput placeholder={'Enter your email'}></FormInput>
                            <FormButton>Subscribe</FormButton>
                        </InputButton>
                        <PrivacyPolicy>By subscribing you agree to with our <a href="">Privacy Policy</a></PrivacyPolicy>
                    </Form>
                </FlexWrapper>

                <hr/>
            </Container>
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

const StyledFooter = styled.section`

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const FormHeader = styled.h3`

`

const InputButton = styled.div`
    display: flex;
    gap: 16px;
`

const FormInput = styled.input`
    
`

const FormButton = styled.button`

`

const PrivacyPolicy = styled.small`
    font-size: 12px;
`

const Small = styled.small`
    font-size: 14px;
`

const Socials = styled.ul`
    display: flex;
    list-style-type: none;
    gap: 12px;
`