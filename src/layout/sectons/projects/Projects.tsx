import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Project} from "./Project";
import BG1 from './../../../assets/images/bg-1.webp';
import BG2 from './../../../assets/images/bg-2.webp';
import BG3 from './../../../assets/images/bg-3.webp';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container width={'1070'}>
                <SectionTitle>My Projects</SectionTitle>
                <FlexWrapper direction={'column'} gap={'78'}>
                    <Project background={BG1}
                             span={"Mental Health"}
                             title={'A Case Study_\n' +
                                 'Find Peace in Meditation'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}></Project>
                    <Project background={BG2}
                             span={"Fashion Show"}
                             title={'A Case Study_\n' +
                                 'Enjoy Fashion Shows From Home'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}></Project>
                    <Project background={BG3}
                             span={"Barbeque"}
                             title={'Branding_\n' +
                                 'Chicken Barbeque Never Goes Wrong\n'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}></Project>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    padding: 170px 0;
`