import { useEffect, useState } from "react";
import { useMap } from "react-leaflet/hooks";
import { useRouteLoaderData } from "react-router-dom";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/popup";
import "../WorldMap/WorldMap.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function MeteorInfoMap(props) {
  const [Meteor, setMeteor] = useState([]);
  const strikesList = [useRouteLoaderData("root")];
  const MeteorName = props.MeteorInfo;
  const RecenterAutomatically = ({ lat, lng }) => {
    const map = useMap();
    useEffect(() => {
      map.setView([lat, lng]);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
        foo: "bar",
        maxZoom: 25,
      }).addTo(map);
    }, [lat, lng]);
    return null;
  };

  useEffect(() => {
    const filteredData = strikesList[0].strikesList.filter(
      (item) => item.name === MeteorName,
    );

    setMeteor(filteredData);
  }, [MeteorName]);

  const position = Meteor.length > 0 && [
    Meteor[0].geolocation.latitude,
    Meteor[0].geolocation.longitude,
  ];

  return (
    Meteor.length > 0 && (
      <div className="Detailed_Location">
        <h2>Detailed Location</h2>
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={true}
          className={"leaflet-container"}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <RecenterAutomatically
            lat={Meteor[0].geolocation.latitude}
            lng={Meteor[0].geolocation.longitude}
          />
        </MapContainer>
      </div>
    )
  );
}
