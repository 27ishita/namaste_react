import React from "react";
import * as ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    key: "heading1",
    id: "title",
  },
  "Heading 1"
);
const heading2 = React.createElement(
  "h2",
  {
    key: "heading2",
    id: "title",
  },
  "Heading 2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
//async defer
root.render(container);
