import React from 'react';
import { connect } from 'react-redux';

const RouteMap = ({ route }) => {
  const API_KEY = 'AIzaSyDXDnj_YaQsufSu4C05PA-E-PWzUebF3-Y';
  if (route.length === 0) {
    return (
      <iframe
        width="600"
        height="450"
        frameBorder="0" style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/directions?key=${API_KEY}&origin=Oslo+Norway&destination=Telemark+Norway&avoid=tolls|highways`}
        allowFullScreen
      />
    );
  }
	  const origin = route[0].intersection1[0];
    const destination = route[route.length - 1].intersection1[0];
    const waypoint = route
	  console.log(origin, 'origin');
	  return (
  <iframe
    width="600"
    height="450"
    frameBorder="0" style={{ border: 0 }}
    src={`https://www.google.com/maps/embed/v1/directions?key=${API_KEY}&origin=${origin}&destination=${destination}&waypoints=${waypoint}`}
    allowFullScreen
  />
	  );
};

export default connect(({ route }) => ({ route }))(RouteMap);
