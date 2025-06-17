import { Fragment } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Import CSS based on build mode
if (import.meta.env.MODE === 'dark') {
  import("./styles/dark.css");
} else {
  import("./styles/light.css");
}

import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <Fragment>
    <App />
  </Fragment>
);
