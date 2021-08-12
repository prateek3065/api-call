import React from "react";
import hacker from "./hackerRank.png";
import github from "./Github.png";
import codechef from "./Codechef.jpeg";
export default function Footer() {
  var hackerRankClick = () => {
    window.open("https://www.hackerrank.com/prateek3065");
  };
  var gitHubClick = () => {
    window.open("https://github.com/prateek3065");
  };
  var codeChefClick = () => {
    window.open("https://www.codechef.com/users/prateek3065");
  };

  return (
    <div style={{ "margin-top": "20px" }} className="company-logo-bar">
      <div className="footer">
        <div>
          <h1>HackerRank</h1>
          <img
            className="icons"
            src={hacker}
            alt="hackerRank-icon"
            onClick={() => hackerRankClick()}
          ></img>
        </div>
        <div>
          <h1>GitHub</h1>
          <img
            className="icons"
            src={github}
            alt="github-icon"
            onClick={() => gitHubClick()}
          ></img>
        </div>
        <div>
          <h1>Codechef</h1>
          <img
            style={{ "border-radius": "20px" }}
            className="icons"
            src={codechef}
            alt="codechef-icon"
            onClick={() => codeChefClick()}
          ></img>
        </div>
      </div>
    </div>
  );
}
