import {Marker} from '@react-google-maps/api';
import MarkerMap from "../MarkerMap/MarkerMap";

const CurrentLocationMarker = ({position}) => {
    return <Marker position={position} icon={{MarkerMap}} />
}

export default CurrentLocationMarker;
