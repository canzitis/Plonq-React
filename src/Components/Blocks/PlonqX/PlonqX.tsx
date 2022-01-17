import {Container, PlonqXButtons, PlonqXText} from "./PlonqX.styled";
import Image from 'next/image'
import React from "react";

interface PlonqXProps {
    plonqX: {
        plonqLogo: string,
        plonqXMobile: string,
        description: string,
        plonqXButton: {
            textMore: string,
            hrefMore: string
        },
        textOnSaleSoon: string
    },
}

const PlonqX: React.FC<PlonqXProps> = ({plonqX}) => {
    return <Container>
        <PlonqXText>
            <Image src={plonqX.plonqLogo} alt="" width={230} height={50} quality={100}/>
            <p>{plonqX.description}</p>
            <PlonqXButtons>
                <a href={plonqX.plonqXButton.hrefMore}>{plonqX.plonqXButton.textMore}</a>
                <span>{plonqX.textOnSaleSoon}</span>
            </PlonqXButtons>
        </PlonqXText>
        <Image src={plonqX.plonqXMobile} alt="" width={450} height={700} quality={100}/>
    </Container>
}

export default PlonqX;