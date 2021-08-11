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
var x = 0;
export default function Pages() {
  x++;
  const [values, setValues] = useState(() => {
    return { isPageLoaded: false, currentPage: 1, data: {} };
  });
  function requestForApi() {
    setValues((prev) => {
      return { ...prev, isPageLoaded: false };
    });
    getData(values.currentPage)
      .then((res) => {
        //console.log(res);
        setValues((prev) => {
          return { ...prev, isPageLoaded: true, data: res };
        });
      })
      .catch((error) => {});
  }

  function changePage(value) {
    //console.log("inside change page");
    if (values.currentPage + value <= 0) {
    } else {
      setValues((prev) => {
        return { ...prev, currentPage: values.currentPage + value };
      });
      requestForApi();
    }
  }
  //console.log("x=" + x);
  //console.log(values.data);
  //console.log(`isPageLoaded${values.isPageLoaded}`);
  const DATA = { ...values.data };
  //console.log(DATA);
  return (
    <div className="container">
      <Page
        isPageLoaded={values.isPageLoaded}
        DATA={DATA}
        currentPage={values.currentPage - 1}
      />
      <Loading
        isPageLoaded={values.isPageLoaded}
        currentPage={values.currentPage - 1}
      />
      <div className="current-status-bar">
        <div className="button">
          <button id="button" onClick={() => changePage(-1)}>
            Back
          </button>
        </div>
        <div>
          <h3>Page no {values.currentPage - 1}</h3>
        </div>
        <div className="button" id="button">
          <button onClick={() => changePage(1)}>Next</button>
        </div>
      </div>
    </div>
  );
}
