import React, { useEffect } from "react";
import { useBookmark } from "../context/BookmarkListContext";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function SingleBookmark() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBookmar,isLoading, currentBookmark } = useBookmark();
  useEffect(() => {
    getBookmar(id);
  }, [id]);

  if (isLoading || !currentBookmark) return <Loader />;
  return (
    <div>
      <button onClick={() => navigate(-1)} className="btn btn--back">
        {" "}
        &larr; Back
      </button>
      <h2>{currentBookmark.cityName}</h2>
      <div
        className={`bookmarkItem`}
      >
        <ReactCountryFlag svg countryCode={currentBookmark.countryCode} />
        &nbsp; <strong>{item.cityName}</strong> &nbsp;
        <span>{item.country}</span>
      </div>
    </div>
  );
} 

export default SingleBookmark;
