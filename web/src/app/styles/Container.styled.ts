import styled from "styled-components";

interface FlexProps {
    justify: string,
    flexWrap?: string,
    gap?: string,
    alignItems?: string,
    width?: string,
    minWidth?: string,
    maxWidth?: string,
    height?: string,
    minHeight?: string,
    maxHeight?: string,
    borderRadius?: string,
    cursor?: string,
    bg?: string,
    margin?: string,
    padding?: string,
}

interface GridProps {
    gridTemplateItems: string,
    justifyItems?: string,
    gap?: string,
    alignItems?: string,
    width?: string,
    minWidth?: string,
    maxWidth?: string,
    height?: string,
    minHeight?: string,
    maxHeight?: string,
    borderRadius?: string,
    cursor?: string,
    bg?: string,
    margin?: string,
    padding?: string,
}


export const FlexRow = styled.div<FlexProps>`
  display: flex;
  justify-content: ${props => props.justify ? props.justify : 'space-around'};
  flex-direction: row;
  gap: ${props => props.gap ? props.gap : '1em'};
  flex-wrap: ${props => props.flexWrap ? props.flexWrap : 'nowrap'};
  align-items: ${props => props.alignItems ? props.alignItems : ''};
  //WIDTH
  width: ${props => props.width ? props.width : 'auto'};
  min-width: ${props => props.width ? props.width : 'auto'};
  max-width: ${props => props.width ? props.width : 'auto'};
  // HEIGHT
  min-height: ${props => props.height ? props.height : 'auto'};
  max-height: ${props => props.height ? props.height : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  margin: ${props => props.margin ? props.margin : ''};
  padding: ${props => props.padding ? props.padding : ''};
  border-radius: ${props => props.borderRadius ? props.borderRadius : ''};
  background-color: ${props => props.bg ? props.bg : ''};`
;

export const FlexColumn = styled.div<FlexProps>`
  display: flex;
  justify-content: ${props => props.justify ? props.justify : 'center'};
  flex-direction: column;
  gap: ${props => props.gap ? props.gap : '0'};
  flex-wrap: ${props => props.flexWrap ? props.flexWrap : 'nowrap'};
  align-items: ${props => props.alignItems ? props.alignItems : ''};
  //WIDTH
  width: ${props => props.width ? props.width : 'auto'};
  min-width: ${props => props.width ? props.width : 'auto'};
  max-width: ${props => props.width ? props.width : 'auto'};
  // HEIGHT
  min-height: ${props => props.height ? props.height : 'auto'};
  max-height: ${props => props.height ? props.height : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  margin: ${props => props.margin ? props.margin : ''};
  padding: ${props => props.padding ? props.padding : ''};
  border-radius: ${props => props.borderRadius ? props.borderRadius : ''};
  background-color: ${props => props.bg ? props.bg : ''};
`;
export const GridColumn = styled.div<GridProps>`
  display: grid;
  grid-template-rows: ${props => props.gridTemplateItems ? props.gridTemplateItems : '1fr'};
  justify-items: ${props => props.justifyItems ? props.justifyItems : 'center'};
  grid-gap: ${props => props.gap ? props.gap : ''};
  align-items: ${props => props.alignItems ? props.alignItems : ''};
  //WIDTH
  width: ${props => props.width ? props.width : 'auto'};
  min-width: ${props => props.width ? props.width : 'auto'};
  max-width: ${props => props.width ? props.width : 'auto'};
  // HEIGHT
  min-height: ${props => props.height ? props.height : 'auto'};
  max-height: ${props => props.height ? props.height : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  margin: ${props => props.margin ? props.margin : ''};
  padding: ${props => props.padding ? props.padding : ''};
  border-radius: ${props => props.borderRadius ? props.borderRadius : ''};
  background-color: ${props => props.bg ? props.bg : ''};
`;

export const GridRows = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${props => props.gridTemplateItems ? props.gridTemplateItems : '1fr'};
  justify-items: ${props => props.justifyItems ? props.justifyItems : 'center'};
  grid-gap: ${props => props.gap ? props.gap : ''};
  align-items: ${props => props.alignItems ? props.alignItems : ''};
  //WIDTH
  width: ${props => props.width ? props.width : 'auto'};
  min-width: ${props => props.width ? props.width : 'auto'};
  max-width: ${props => props.width ? props.width : 'auto'};
  // HEIGHT
  min-height: ${props => props.height ? props.height : 'auto'};
  max-height: ${props => props.height ? props.height : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  margin: ${props => props.margin ? props.margin : ''};
  padding: ${props => props.padding ? props.padding : ''};
  border-radius: ${props => props.borderRadius ? props.borderRadius : ''};
  background-color: ${props => props.bg ? props.bg : ''};
`;