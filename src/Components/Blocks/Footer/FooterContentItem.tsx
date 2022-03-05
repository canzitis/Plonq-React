import React from "react";
import {Container} from "./FooterContentItem.styled";

interface FooterContentItemProps {
    items: {
        item: string
    }[]
}

const FooterContentItem: React.FC<FooterContentItemProps> = ({items}) => {
    return <Container>
        {items.map((i) => {
            return <span key={i.item}>{i.item}</span>
        })}
    </Container>
}

export default FooterContentItem;
