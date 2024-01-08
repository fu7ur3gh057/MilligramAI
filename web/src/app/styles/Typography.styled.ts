import styled from "styled-components";
import {devices} from "../../utils/screenUtil";

interface TypographyProps {
    color?: string,
    fontSize?: string,
    hoverColor?: string
    bold?: boolean,
    margin?: string,
    padding?: string,
    cursor?: string
}


export const Text = styled.p<TypographyProps>`
    color: ${props => props.color ? props.color : props.theme.text};
    font-size: ${props => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${props => props.bold ? 'bold' : '400'};
    margin: ${props => props.margin ? props.margin : '0'};
    padding: ${props => props.padding ? props.padding : '0'};


    @media ${devices.mobileS} {
        font-size: 0.8em;
    }
`;

export const Title = styled(Text)`
    font-weight: ${props => props.bold ? 'bold' : '400'};
`;

export const Paragraph = styled(Text)`
    font-weight: ${props => props.bold ? 'bold' : '600'};
`;

export const HeadTitle = styled(Text)`
    font-weight: ${props => props.bold ? 'bold' : '800'};
`;
