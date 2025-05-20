import React from "react";
import Map from "../Map/map";

function Bookmark() {
  return (
    <div className="appLayout">
      <div className="sidebar">
        {/* <Outlet /> */}
        <div>bookmark list</div>
      </div>
      <Map markerLocations={[]} />
    </div>
  );
}

export default Bookmark;
