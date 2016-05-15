import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer, CircleMarker } from 'react-leaflet';
import _ from 'lodash';
import { Link } from 'react-router';

const mapCenter = [38.09024, -95.712891];
const marker1 = [39.952835, -75.164058];
export default (props) => {
  return (
    <Map center={mapCenter} zoom={4}>
      <TileLayer
        url='https://api.mapbox.com/v4/jamestyack.ndpp0jak/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamFtZXN0eWFjayIsImEiOiJkbmNSd2prIn0.BTm2f3y2Bu5hBUt6TQAZ7w'
        attribution='© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {renderSystemMarkers(props.systems, props.selected, props.selectSystem)}
    </Map>
  );
}

function renderSystemMarkers(systems, selected, selectSystem) {
  const selectedId = _.get(selected, 'id', '');
  const icon = L.icon();
  return systems.map((system) => {
    const isSelected = (system.id === selectedId);
    const color = (isSelected ? 'red' : 'blue');
    const coords = system.mapCenter.split('|');
    return (
        <Marker
            onMouseOver={() => selectSystem(system)} 
            onMouseOut={() => selectSystem(null)}
            title={system.name}
            opacity={isSelected ? 1 : 0.5}
            key={system.id}
            position={[Number(coords[0]),Number(coords[1])]}>
            <Popup>
                <span>
                    <h5><a href={'/system/' + system.id}>{system.name}</a></h5>
                    {system.location}
                </span>
            </Popup>
        </Marker>
    )
  });
}

function renderSystemCircles(systems, selected) {
  const selectedId = _.get(selected, 'id', '');
  const icon = L.icon();
  return systems.map((system) => {
    const isSelected = (system.id === selectedId);
    const color = (isSelected ? 'red' : 'blue');
    const coords = system.mapCenter.split('|');
    return (
      <CircleMarker
        color={color}
        fillColor={color}
        title='test'
        radius={10} // could set this relative to total number of bikes and/or stations
        opacity={0.7}
        key={system.id}
        center={[Number(coords[0]),Number(coords[1])]}>
        <Popup>
          <span>{'<h2>' + system.name + '</h2><br/>' + system.location}</span>
        </Popup>
      </CircleMarker>
    )
  });
}

