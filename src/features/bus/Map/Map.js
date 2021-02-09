import React from 'react';
import { useDispatch } from 'react-redux';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; 
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css'; 

import { busDetail } from 'features/bus/busSlice';
import BusIcon from 'assets/svg/bus.svg';
import './map.scss';

export const Map = ({filterData}) => {
  const dispatch = useDispatch();
  const busMarker = new L.Icon({
    iconUrl: BusIcon,
    iconSize: new L.Point(40, 40),
  });

  const markers =  filterData.map(item => {
    const location = [item.BusPosition.PositionLat, item.BusPosition.PositionLon];
    return (
      <Marker 
        position={location}
        key= {item.PlateNumb}
        data={item.PlateNumb} 
        icon={busMarker}
        eventHandlers={{
          click: (e) => {
            const selectItem = e.target.options.data;
            dispatch(busDetail(selectItem));
          },
        }}
      />
    )
  })
  
  return (
    <MapContainer 
      center={[23.4792933333333, 120.437648333333]} 
      zoom={11} 
      className="map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup>
        {markers}
      </MarkerClusterGroup>     
    </MapContainer>
  )
}


