import Image from "next/image";

import {
    StyledTextContainer,
    StyledTitle,
    StyledDescription,
    StyledImageContainer,
    StyledMainContainer,
    StyledContentContainer,
    StyledInnerContentContainer,
} from "./elements";
import { Card } from "../../collections/Card/Card";

const cardProps = [
    {
        id: 1,
        title: "Brief",
        leftDescription: "Complete ",
        boldDescription: "brief writing or simple guidance ",
        rightDescription: "on what to include, we've got you covered",
        width: "80",
        image: {
            src: "/img/brief.webp",
            alt: "meeting",
            width: "40",
            height: "40"
        }
    },
    {
        id: 2,
        title: "Search",
        leftDescription: "in-depth agency search covering: ",
        boldDescription: "criteria matching, ",
        rightDescription: "door knocking and due-dilligence vetting",
        width: "90",
        image: {
            src: "/img/search.webp",
            alt: "meeting",
            width: "40",
            height: "40"
        }
    },
    {
        id: 3,
        title: "Pitch",
        leftDescription: "Comprehensive ",
        boldDescription: "pitch management ",
        rightDescription: "including comms, diary management and pitch hosting",
        width: "100",
        image: {
            src: "/img/pitch-icon.png",
            alt: "meeting",
            width: "40",
            height: "40"
        }
    },
]

export const Main = ({ image, title, description, ctaText, ...props }) => {
    return (
        <StyledMainContainer {...props}>
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
            </StyledTextContainer>
            <StyledInnerContentContainer>

                <StyledImageContainer>
                    <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
                </StyledImageContainer>
                <StyledContentContainer>
                    {cardProps.map((card) => {
                        return <Card key={card.id} width={card.width} title={card.title} image={card.image} leftDescription={card.leftDescription} boldDescription={card.boldDescription} rightDescription={card.rightDescription} />
                    })}
                </StyledContentContainer>
            </StyledInnerContentContainer>
        </StyledMainContainer>
    );
};
