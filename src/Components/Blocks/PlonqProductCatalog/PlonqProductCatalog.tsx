import {
    Container,
    PlonqProductCatalogItem,
    PlonqProductCatalogItemWrapper, PlonqProductCatalogOnSaleSoon,
    PlonqProductCatalogPriceWrapper
} from "./PlonqProductCatalog.styled";
import Image from "next/image";
import React from "react";

interface PlonqProductCatalogProprs {
    catalog:
        {
            imgItem: string,
            imgTitle: string,
            description: string,
            price: string | null,
            href: string | null
        }[],

}

const PlonqProductCatalog: React.FC<PlonqProductCatalogProprs> = ({catalog}) => {
    return <Container>
        <PlonqProductCatalogItemWrapper>
            {catalog.map((item, key) => {
                return <PlonqProductCatalogItem key={key}>
                    <Image src={item.imgItem} alt="" width={160} height={410} quality={100}/>
                    <div>
                        <Image src={item.imgTitle} alt="" width={204} height={33} quality={100}/>
                        <p>{item.description}</p>
                        {item.price ?
                            <PlonqProductCatalogPriceWrapper>
                                <span>{item.price}</span>
                                <a href={item.href}>Где купить</a>
                            </PlonqProductCatalogPriceWrapper>
                            : <PlonqProductCatalogOnSaleSoon>
                                <span>Скоро в продаже</span>
                            </PlonqProductCatalogOnSaleSoon>
                        }
                    </div>
                </PlonqProductCatalogItem>
            })}
        </PlonqProductCatalogItemWrapper>
    </Container>
}

export default PlonqProductCatalog;