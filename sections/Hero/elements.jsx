import styled from "styled-components";
import {
  Button,
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  max-width: 1640px;
  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const StyledGetStartedBtn = styled((props) => (
  <Button {...props} variant="contained" color="main" />
))`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
  @media (max-width: 1024px) {
    margin-top: 20px;
  }
  @media (max-width: 767px) {
    height: 32px;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  @media (max-width: 767px) {
    font-size: 32px;
    line-height: 1.25;
  }
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 1.563rem 0 0;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 30%;
  margin-left: 11.125rem;
  font-family: sans-serif;
  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
    text-align: center;
  }
`;

export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    margin-top: 12px;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;

  @media (max-width: 1024px) {
    width: 50%;
    margin-left: 0;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  @media (max-width: 767px) {
    width: 90%;
  }
`;
