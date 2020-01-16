import React from "react";
import ReactDOM from "react-dom";
import Index from "./pages/index";
import About from "./pages/about";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";

function getComponent() {
  switch (window.location.pathname) {
    case "/":
      return <Index />;
    case "/about":
      return <About />;
    case "/terms":
      return <Terms />;
    case "/privacy":
      return <Privacy />;
    default:
      return <div>Error</div>;
  }
}

ReactDOM.hydrate(getComponent(), document.getElementById("root"));
