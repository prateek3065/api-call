import React from "react";

export default function Page({ isPageLoaded, toggleIsPageLoading }) {
  if (isPageLoaded === false) {
    return null;
  }
  return (
    <div className="page">
      <div className="each-person">
        <div> Name: Prateek2</div>
        <div> Name: Prateek2</div>
        <div> Name: Prateek2</div>
        <div> Name: Prateek2</div>
      </div>
      <div className="each-person">
        <div> Name: Prateek2</div>
        <div> Name: Prateek2</div>
        <div> Name: Prateek2</div>
        <div> Name: Prateek2</div>
      </div>
    </div>
  );
}
