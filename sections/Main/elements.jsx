import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledMainContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  text-align: center;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
  padding: 0;
  font-size: 22px;
  margin-bottom: 60px;
  text-align: center;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
`;

export const StyledInnerContentContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;

  @media (min-width: 1024px) {
      flex-direction: row;
  }
`;

export const StyledContentContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 64px;
  padding: 0 20px;

  @media (min-width: 1024px) {
      align-items: start;
      width: 50%;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-height: 65rem;
  width: 100%;
  height: 100%;
  padding-left: 60px;

  @media (min-width: 1024px) {
      width: 50%;
      padding-left: 0;
  }
`;

// import styled from "styled-components";
// import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

// export const StyledMainContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
//   align-items: center;
//   flex-direction: column;
//   padding-top:100px;
// `;

// export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
//   margin: 0;
//   color: black;
//   text-align:center

// `;

// export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
// margin:0;
// padding:0;
// font-size:22px;
// margin-bottom: 60px;
// text-align:center
// `;

// export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
//   color: black;
//   font-family: sans-serif;
// `;

// export const StyledInnerContentContainer = styled(({ ...props }) => <div {...props} />)`
// width: 100%;
// max-width: 1400px;
// display:flex;
// justify-content: space-between;
// gap:100px;
// `

// export const StyledContentContainer = styled(({ ...props }) => <div {...props} />)`
// display:flex;
// flex-direction: column;
// justify-content: center;
// align-items: start;
// width:50%;
// gap:64px;

// `

// export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
//   max-height: 65rem;
//   width: 50%;
//   height: 100%;
//     padding-left:60px;
// `;
