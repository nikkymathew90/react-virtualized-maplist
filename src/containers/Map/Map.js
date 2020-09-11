import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
//import useSuperCluster from "use-supercluster";
import classes from "./Map.module.css";
import Pin from "../../assets/images/location_pin.png";
import PinSelected from "../../assets/images/location_pin_selected.png";

const Map = props => {
  const [zoom, setZoom] = useState(10);
  const [cords, setCords] = useState({ lat: -33.8678, lng: 151.2073 });
  const defaultCords = { lat: -30.7614, lng: 151.4489 };
  const defaultZoom = 7;

  const Marker = ({ children }) => children;
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  useEffect(() => {
    if (props.pinRow) {
      const { latitude, longitude } = props.pinList[props.pinRow];
      setCords({ lat: latitude, lng: longitude });
      setZoom(14);
    } else {
      setCords(defaultCords);
      setZoom(defaultZoom);
    }
  }, [props.pinRow]);

  return (
    <div className={classes.Map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultCords}
        center={cords}
        defaultZoom={defaultZoom}
        zoom={zoom}
      >
        {props.pinList.map((pin, index) => {
          return (
            <Marker key={index} lat={pin.latitude} lng={pin.longitude}>
              {props.pinRow !== index ? (
                <img src={Pin} alt={pin.place_name} />
              ) : (
                <img src={PinSelected} alt={pin.place_name} />
              )}
            </Marker>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
