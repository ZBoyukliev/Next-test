import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledMainContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  flex-direction: column;
  padding-top:100px;
  @media (max-width: 1024px) {
    padding:0;
  padding-top:100px;

  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  text-align:center

`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
margin:0;
padding:0;
font-size:22px;
margin-bottom: 60px;
text-align:center;

`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
`;

export const StyledInnerContentContainer = styled(({ ...props }) => <div {...props} />)`
width: 100%;
max-width: 1400px;
display:flex;
justify-content: space-between;
gap:100px;

@media (max-width: 1024px) {
  width:100%;
  flex-direction: column;
  gap:40px;
}
`

export const StyledContentContainer = styled(({ ...props }) => <div {...props} />)`
display:flex;
flex-direction: column;
justify-content: center;
align-items: start;
width:50%;
gap:64px;

@media (max-width: 1024px) {
  width:75%;
  margin: 0 auto;

  gap:32px;
}
`

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-height: 65rem;
  width: 50%;
  height: 100%;
  padding-left:60px;

    @media (max-width: 1024px) {
      margin: 0 auto;

      max-height: 100%;
      padding-left:0;
    }
`;
