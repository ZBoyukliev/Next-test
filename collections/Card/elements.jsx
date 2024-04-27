export * from "./Card";
import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledCardContainer = styled(({  height, ...props }) => <SectionContainer {...props} />)`
  dispay:flex;
  align-items: center;
  padding:40px 64px;
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
  
  @media  (max-width: 767px) {
    padding:24px;
    gap: 24px;

    }

`;

export const StyledTextContainer = styled((props) =>  <div {...props} />)`
  width: 75%;
  @media (min-width:1000px) and (max-width: 1024px) {
  width: 70%;

  }
`

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  font-size: 24px;
  line-height:1.25;
  ${StyledCardContainer}:hover & {
    color: blue; 
    text-decoration: underline; 
  };
  @media  (max-width: 767px) {
    font-size:20px
    }
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
  color: black;
  font-size:18px;
  font-family: sans-serif;
  display: inline;
  line-height:1.25;
  @media (min-width:1000px) and (max-width: 1024px) {
    font-size:20px
    };
    @media  (max-width: 767px) {
      font-size:14px
      }
`;

export const StyledBoldDescription = styled(({ ...props }) => <SectionSubheading {...props} />)`
  margin: 0;
  font-weight:bold;
  color: black;
  font-family: sans-serif;
  font-size:18px;
  display: inline;
  line-height:1.25;
  @media (min-width:1000px) and (max-width: 1024px) {
    font-size:20px
    };
    @media  (max-width: 767px) {
      font-size:14px
      }
`;

export const StyledIconContainer = styled(({ ...props }) => <div {...props} />)`
  width:60px;
  height: 60px;
  @media  (max-width: 767px) {
    width:32px;
  height: 32px;
    }
`