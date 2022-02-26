import {Container} from "./MapGoogle.styled";
import {GoogleMap} from "@react-google-maps/api";
import {useCallback, useRef} from "react";
import {MapTheme} from "./MapTheme";

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat:  51.6720400,
    lng: 39.1843000
};

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    styles: MapTheme
}


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
            options={defaultOptions}
        >
        </GoogleMap>
    </Container>
}

export default MapGoogle;
