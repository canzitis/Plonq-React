import React from "react";

interface FooterContentItemProps {
    items: {
        item: string
    }[]
}

const FooterContentItem: React.FC<FooterContentItemProps> = ({items}) => {
    return <>
        {items.map((i) => {
            return <span key={i.item}>{i.item}</span>
        })}
    </>
}

export default FooterContentItem;
