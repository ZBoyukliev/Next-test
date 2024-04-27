import Image from "next/image";
import {
  StyledBoldDescription,
  StyledCardContainer,
  StyledDescription,
  StyledIconContainer,
  StyledTextContainer,
  StyledTitle,
} from "./elements";

export const Card = ({
  image,
  title,
  leftDescription,
  boldDescription,
  rightDescription,
  width,
  ...props
}) => {
  return (
    <StyledCardContainer width={width}>
      <StyledIconContainer>
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledIconContainer>

      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>

        <StyledDescription>{leftDescription}</StyledDescription>
        <StyledBoldDescription>{boldDescription}</StyledBoldDescription>
        <StyledDescription>{rightDescription}</StyledDescription>
      </StyledTextContainer>
    </StyledCardContainer>
  );
};
