import { Flex, Box } from "@chakra-ui/react"
import { useEffect, useRef, useState } from 'react'
//LEAFLET
import 'leaflet/dist/leaflet.css';
import { MapContainer, GeoJSON, FeatureGroup, TileLayer } from 'react-leaflet';
import geoData from "assets/floor"

export const PlanComponent = () => {
  const position = [53.91712819154794, 27.63492423374176]  //[53.91687819154794, 27.63435423374176] - old position
  const mapRef = useRef(null)

  return (
    <Flex w="100%" h="100%" >
      <MapContainer maxZoom={25} center={position} zoom={20} style={{ width: "100%", height: "100%" }}>
        <TileLayer
          url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=laR0YY8O5Cgv3pummhG5"
        />

        <FeatureGroup>
          <GeoJSON data={geoData.features} />
        </FeatureGroup>
      </MapContainer>
    </Flex >
  );
};


