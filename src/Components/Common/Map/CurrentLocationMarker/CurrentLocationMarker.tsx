import {Marker} from '@react-google-maps/api';
import React from "react";

interface CurrentLocationMarkerProps {
    position: any,
}

const CurrentLocationMarker: React.FC<CurrentLocationMarkerProps> = ({position}) => {
    return <Marker position={position} icon={{url: '/images/Map/marker.svg'}}/>
}
export default CurrentLocationMarker;
