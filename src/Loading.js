import React from "react";

export default function Loading({ isPageLoaded, toggleIsPageLoading }) {
  if (isPageLoaded === false) {
    return (
      <div className="page">
        <h1>Still Loading...</h1>
      </div>
    );
  }
  return null;
}
