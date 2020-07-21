import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = () => {
  return (
    <ComposableMap projectionConfig={{ scale: 160 }} className="worldStyle">
      <Sphere stroke="#FF5533" strokeWidth={0} />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
