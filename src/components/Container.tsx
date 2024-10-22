import React from 'react';
import styled from "styled-components";

type ContainerPropsType = {
    width?: string
    marginTop?: string
    marginBottom?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: ${props => props.width || '1200'}px;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    margin: ${props => props.marginTop || 0}px auto ${props => props.marginBottom || 0}px;
    border: 1px solid red;
    
`