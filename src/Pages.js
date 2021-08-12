import React from "react";
import Page from "./Page";
import { useState, useEffect } from "react";
/*
async function getData(currentPage) {
  const response = await fetch(
    `https://reqres.in/api/users?page=${currentPage}`
  );
  const obj = await response.json();
  return obj;
}
var currentPage = 1;
var DATA = {};
var isFetchingApiDone = true;
*/
var currentPageNo = 1;
export default function Pages() {
  const [pageNo, setPageNo] = useState(() => {
    return [];
  });
  const [allInfo, setAllInfo] = useState(() => {
    return {};
  });
  function changePageClick(step) {
    if (pageNo + step <= 0) return;
    currentPageNo += step;
    setPageNo(currentPageNo);
  }

  useEffect(() => {
    //console.log("inside useEffect");
    fetch(`https://reqres.in/api/users?page=${pageNo}`)
      .then((res) => res.json())
      .then((res) => {
        setAllInfo({ ...res });
        //console.log(allInfo);
      })
      .catch((error) => {});
  }, [pageNo]);
  //console.log(allInfo);
  return (
    <div className="container">
      <Page allInfo={allInfo} />
      <div className="current-status-bar">
        <div className="button">
          <button id="button" onClick={() => changePageClick(-1)}>
            Back
          </button>
        </div>
        <div>
          <h3>Page no {allInfo.page}</h3>
        </div>
        <div className="button">
          <button id="button" onClick={() => changePageClick(1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
/*
 
       <Page isFetchingApiDone={isFetchingApiDone} DATA={DATA} />
      />
*/
