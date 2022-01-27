import {Container, MapText} from "./Map.styled";
import React from "react";
import MapGoogle from "../../Common/Map/MapGoogle";
import {useJsApiLoader} from "@react-google-maps/api";


interface MapProps {
    map: {
        text: string,
        href: string,
    }
}


const API_KEY = process.env.REACT_APP_API_KEY
const sf = process.env.SDGJA
console.log(API_KEY)
console.log(sf)
const Map: React.FC<MapProps> = ({map}) => {


    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
    })

    return <Container>
        {isLoaded ? <MapGoogle/> : <span>Загрузка карты...</span>}
        <MapText>
            <p dangerouslySetInnerHTML={{__html: map.text}}/>
            <a href={map.href}>Найти магазин</a>
        </MapText>
    </Container>
}

export default Map
