import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer, CircleMarker } from 'react-leaflet';
import _ from 'lodash';
import { Link } from 'react-router';

const mapCenter = [38.09024, -95.712891];
export default (props) => {
  console.log(props.system);
  return (
    <Map center={props.system.mapCenter.split('|')} zoom={13}>
      <TileLayer
        url='https://api.mapbox.com/v4/jamestyack.ndpp0jak/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamFtZXN0eWFjayIsImEiOiJkbmNSd2prIn0.BTm2f3y2Bu5hBUt6TQAZ7w'
        attribution='© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {renderSystemCircles(props.system, props.stations)}
    </Map>
  );
}

function renderSystemCircles(system, stations) {
  const icon = L.icon();
  return stations.map((station) => {
    const color = 'blue';
    const coords = station.loc.coordinates;
    return (
      <CircleMarker
        color={color}
        fillColor={color}
        title='test'
        radius={10} // could set this relative to total number of bikes and/or stations
        opacity={0.7}
        key={station._id.stationId}
        center={coords}>
        <Popup>
          <span>{station.name}</span>
        </Popup>
      </CircleMarker>
    )
  });
}

