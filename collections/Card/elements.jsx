export * from "./Card";
import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledCardContainer = styled(({  height, ...props }) => <SectionContainer {...props} />)`
  dispay:flex;
  align-items: center;
  padding:48px;
  gap: 48px;
  background: #f3f3f3;
  border-radius: 8px;
  justify-content: start;
  margin: 0;
  width: ${props => props.width}%;
  transition: border-color 0.3s ease;
  border: 2px solid #f3f3f3;
  
  &:hover {
    border: 2px solid blue; 
    cursor: pointer;
  }
  
  @media (max-width: 1024px) {
  padding:32px;

  }

`;

export const StyledTextContainer = styled((props) =>  <div {...props} />)`
  width: 75%;
`

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  font-size: 30px;
  line-height:1.25;
  ${StyledCardContainer}:hover & {
    color: blue; 
    text-decoration: underline; 
  }
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
  color: black;
  font-size:24px;
  font-family: sans-serif;
  display: inline;
  
`;

export const StyledBoldDescription = styled(({ ...props }) => <SectionSubheading {...props} />)`
  margin: 0;
  font-weight:bold;
  color: black;
  font-family: sans-serif;
  font-size:24px;
  display: inline;
  
`;

export const StyledIconContainer = styled(({ ...props }) => <div {...props} />)`
  width:100px;
  height: 100px;
`