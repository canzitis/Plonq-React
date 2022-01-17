import {Container, MapText} from "./Map.styled";
import React from "react";


interface MapProps {
    map: {
        text: string,
        href: string,
    }
}

const Map: React.FC<MapProps> = ({map}) => {
    return <Container>
        <MapText>
            <p dangerouslySetInnerHTML={{__html: map.text}}/>
            <a href={map.href}>Найти магазин</a>
        </MapText>
    </Container>
}

export default Map
