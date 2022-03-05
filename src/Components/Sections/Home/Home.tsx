import {Container, HomeButtons, HomeInfo, HomeWrapper, ImageBox, WrapperContent} from "./Home.styled";
import Image from 'next/image'
import PlonqX from "../../Blocks/PlonqX/PlonqX";
import PlonqProductCatalog from "../../Blocks/PlonqProductCatalog/PlonqProductCatalog";
import React from "react";
import {ajax} from "rxjs/ajax";
import Map from "../../Blocks/Map/Map";
import AboutProduct from "../../Blocks/AboutProduct/AboutProduct";

interface HomeProprs {
    home: {
        imagePlonq: string,
        imageNew: string,
        imageLogo: string,
        Image500: string,
        descriptionHome: string,
        homeButtons: {
            textButtons: string,
            href: string
        }[],
        plonqX: any,
        catalog: any,
        map: any,
        aboutProduct: any
    },
}


const Home: React.FC<HomeProprs> = ({home}) => {
    return <Container>
        <HomeWrapper>
            <ImageBox>
                <Image src={home.imagePlonq} alt="" width={1920} height={1080} quality={100}/>
            </ImageBox>
            <HomeInfo>
                <div>
                    <Image src={home.imageNew} alt="" width={55} height={17} quality={100}/>
                </div>
                <div>
                    <Image src={home.imageLogo} alt="" width={200} height={40} quality={100}/>
                    <Image src={home.Image500} alt="" width={85} height={42} quality={100}/>
                </div>
                <p>{home.descriptionHome}</p>
                <HomeButtons>
                    {home.homeButtons.map((item) => {
                        return <a href={item.href}
                                  key={item.textButtons}>{item.textButtons}</a>
                    })}
                </HomeButtons>
            </HomeInfo>
        </HomeWrapper>
        <WrapperContent>
            <PlonqX plonqX={home.plonqX}/>
            <PlonqProductCatalog catalog={home.catalog}/>
            <Map map={home.map}/>
            <AboutProduct aboutProduct={home.aboutProduct}/>
        </WrapperContent>
    </Container>
}

export default Home;
