import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom,hanldeMapZoom }) {
  return (
    <>

    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
    <form >
      <label>
        设置默认放大比例(1-10)
        <input type="number" value={zoom} onChange={hanldeMapZoom}/>
        
      </label>
    </form>
    </>
  );
}

export default Map;
