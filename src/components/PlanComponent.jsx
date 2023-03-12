import { Flex } from "@chakra-ui/react"
import 'leaflet/dist/leaflet.css';
import { MapContainer, GeoJSON, FeatureGroup, TileLayer } from 'react-leaflet';
import geoData from "assets/floor"

export const PlanComponent = () => {
  const position = [53.91712819154794, 27.63492423374176]  //[53.91687819154794, 27.63435423374176] - old position

  return (
    <Flex w="100%" h="100%" >
      <MapContainer center={position} zoom={20} style={{ width: "100%", height: "100%" }}>
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}

        <FeatureGroup>
          <GeoJSON data={geoData.features} />
        </FeatureGroup>
      </MapContainer>
    </Flex >
  );
};


