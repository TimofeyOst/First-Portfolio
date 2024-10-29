import styled from "styled-components";

type ContainerPropsType = {
    width?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: ${props => props.width || '1200'}px;
    width: 100%;
    min-height: 100%;
    
    padding: 0 15px;
    margin: 0 auto;
    border: 1px solid red;
    
    
`