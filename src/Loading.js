import React from "react";

export default function Loading({ isPageLoaded, currentPage }) {
  if (isPageLoaded === false && currentPage != 0) {
    return (
      <div className="page">
        <h1>Still Loading...</h1>
      </div>
    );
  } else if (currentPage === 0) {
    return (
      <div className="page">
        <h1>Please click on the buttons to navigate to pages</h1>
      </div>
    );
  }
  return null;
}
