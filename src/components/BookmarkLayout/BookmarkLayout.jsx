import React from "react";
import { Outlet } from "react-router-dom";
import Map from "../Map/map";
import { useBookmark } from "../context/BookmarkListContext";

function BookmarkLayout() {
  const {bookmarks} = useBookmark()
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
        <div>bookmark list</div>
      </div>
      <Map markerLocations={bookmarks} />
    </div>
  );
} 

export default BookmarkLayout;
