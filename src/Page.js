import React from "react";
const { v4: uuidv4 } = require("uuid");
export default function Page({ allInfo }) {
  console.log(allInfo);
  if (allInfo.page === undefined) return null;
  else if (allInfo.data.length === 0)
    return (
      <div className="page">
        <h1 style={{ "margin-left": "340px" }}>Page no: {allInfo.page}</h1>
        <h1 style={{ "margin-left": "360px" }}>No Data</h1>
      </div>
    );
  return (
    <div className="page">
      <h1 style={{ "margin-left": "340px" }}>Page no: {allInfo.page}</h1>
      {allInfo.data.map((person) => {
        return (
          <div className="each-person" key={uuidv4()}>
            <div className="information-of-eachperson">
              <li>Id :{person.id}</li>
              <li>First Name :{person.first_name}</li>
              <li>Last Name :{person.last_name}</li>
              <li>Person Email :{person.email}</li>
            </div>
            <div>
              <img src={person.avatar} alt="avatar" className="image"></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}
