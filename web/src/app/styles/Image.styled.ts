import styled from "styled-components";

interface Props {
    width?: string,
    height?: string,
    filter?: string,
    borderRadius?: string,
    cursor?: string,
    margin?: string,
    opacity?: string,
}


export const VectorImage = styled.img<Props>`
  width: ${props => props.width ? props.width : '20px'};
  height: ${props => props.height ? props.height : '20px'};
  filter: ${props => props.filter ? props.filter : props.theme.filter};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '0'};
  cursor: ${props => props.cursor ? props.cursor : 'cursor'};
  margin: ${props => props.margin ? props.margin : '0'};
  opacity: ${props => props.opacity ? props.opacity : '1'};
  transition: ${({theme}) => theme.transition};
`;

// Default hasn't Filter color
export const Image = styled.img<Props>`
  width: ${props => props.width ? props.width : '20px'};
  height: ${props => props.height ? props.height : '20px'};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '0'};
  cursor: ${props => props.cursor ? props.cursor : 'cursor'};
  margin: ${props => props.margin ? props.margin : '0'};
  opacity: ${props => props.opacity ? props.opacity : '1'};
  transition: ${({theme}) => theme.transition};
`;
