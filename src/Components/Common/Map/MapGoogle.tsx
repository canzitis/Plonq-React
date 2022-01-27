import {Container} from "./MapGoogle.styled";
import {GoogleMap} from "@react-google-maps/api";
import {useCallback, useRef} from "react";

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const MapGoogle = () => {
    const mapRef = useRef(undefined)

    const onLoad = useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = useCallback(function callback() {
        mapRef.current = undefined;
    }, [])

    return <Container>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
        </GoogleMap>
    </Container>
}

export default MapGoogle;
