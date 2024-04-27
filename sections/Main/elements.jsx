import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";

export const StyledMainContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  flex-direction: column;
  max-width: 1920px;
  width: 100%;
  padding: 100px 0;
  @media (max-width: 1024px) {
    padding: 0;
    padding-top: 100px;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
  padding: 0;
  font-size: 22px;
  margin-bottom: 60px;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
`;

export const StyledBackgroundImage = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
`;

export const StyledOuterContentContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 1920px;
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 80px;
  padding: 0 200px;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    gap: 40px;
    padding: 0;
  }
`;

export const StyledInnerContentContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 1640px;
  margi: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 80px;
  padding: 0 64px;

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    gap: 40px;
    padding: 0;
  }
`;

export const StyledContentContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 50%;
  gap: 32px;

  @media (max-width: 1024px) {
    width: 60%;
    margin: 0 auto;
    align-items: center;
    gap: 32px;
  }
  @media (max-width: 767px) {
    width: 90%;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-height: 65rem;
  width: 50%;
  height: 100%;

  @media (max-width: 1024px) {
    margin: 0 auto;

    max-height: 100%;
    padding-left: 0;
  }
  @media (max-width: 767px) {
    width: 60%;
  }
`;
