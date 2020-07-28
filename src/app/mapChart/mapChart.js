import React, { memo } from "react";
import Countrys from "../../store/countrys"
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = ({ setTooltipContent,setCountrys,data }) => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 100 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                  }}
                  onClick={()=>{
                    const { NAME, POP_EST } = geo.properties;
                      setCountrys(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      opacity:"1",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      outline: "none",
                    },
                    focus: {
                      outline: "none"
                     }
                  }}
                />
              ))
            }
          </Geographies>
          (data.length > 0 &&
          {data.map(({ name, coordinates,index }) => (
      <Marker key={name} coordinates={coordinates}>
        <circle r={1} fill="#F00" stroke="#fff" strokeWidth={1} />
        <text
          textAnchor="middle"

          style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
        >

        </text>
      </Marker>
    ))})
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
