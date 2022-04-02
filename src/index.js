// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.scss";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./index.scss";

const container = document.getElementById("app");

const root = ReactDOMClient.createRoot(container);

root.render(<App />);
