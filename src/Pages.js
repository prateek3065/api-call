import React from "react";
import Page from "./Page";
import { useState, useEffect } from "react";
import Loading from "./Loading";
async function getData(currentPage) {
  const response = await fetch(
    `https://reqres.in/api/users?page=${currentPage}`
  );
  const obj = await response.json();
  return obj;
}
export default function Pages() {
  const [isPageLoaded, setIsPageLoaded] = useState(() => {
    return true;
  });
  const [dataToDisplay, setDataToDisplay] = useState(() => {
    return [];
  });
  const [currentPage, setCurrentPage] = useState(() => {
    return 1;
  });

  useEffect(() => {
    getData(currentPage)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {});
  }, [currentPage]);

  function toggleIsPageLoading(ans) {}
  function changePage(value) {
    if (currentPage + value <= 0) setCurrentPage(1);
    else setCurrentPage((prev) => prev + value);
  }
  return (
    <div className="container">
      <Page
        isPageLoaded={isPageLoaded}
        toggleIsPageLoading={toggleIsPageLoading}
        changePage={changePage}
      />
      <Loading
        isPageLoaded={isPageLoaded}
        toggleIsPageLoading={toggleIsPageLoading}
      />
      <div className="current-status-bar">
        <div className="button">
          <button id="button" onClick={() => changePage(-1)}>
            Back
          </button>
        </div>
        <div>
          <h3>Page no {currentPage}</h3>
        </div>
        <div className="button" id="button">
          <button onClick={() => changePage(1)}>Next</button>
        </div>
      </div>
    </div>
  );
}
