import {AboutProductWrapperText, Container} from "./AboutProduct.styled";
import React from "react";

interface AboutProductProps {
    aboutProduct:
        {
            title: string,
            description: string,
            href: string,
            img: string
        }[],
}

const AboutProduct: React.FC<AboutProductProps> = ({aboutProduct}) => {
    return <Container>
        {aboutProduct.map((item) => {
            return <AboutProductWrapperText key={item.title}>
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <a href={item.href}>Подробнее</a>
                </div>
                <div>
                    <img src={item.img} alt=""/>
                </div>
            </AboutProductWrapperText>
        })}
    </Container>
}

export default AboutProduct;
