import React from "react";

export default function Page({ isPageLoaded, DATA, currentPage }) {
  console.log(DATA);
  //console.log("here" + DATA);
  if (isPageLoaded === false || currentPage === 0) {
    return null;
  }
  //const id = DATA.data[0].id;
  //console.log("id=" + id);
  const persons = DATA.data;
  persons.forEach((person) => {
    console.log(person.email);
  });
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
