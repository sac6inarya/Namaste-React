import React from "react";
import  ReactDOM  from "react-dom/client";
const heading = React.createElement("h1", { key: 1 }, "Hello React H1!");

const heading2 = React.createElement(
  "h1",
  { id: "heading-two", key: 2 },
  "Hello another React H1!"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
