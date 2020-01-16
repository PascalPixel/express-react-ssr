import React, { useEffect } from "react";
import Nav from "./Nav";

const SITE = "MySite";

const LINKS = {
  header: { "/": "Home", "/about": "About" },
  footer: { "/terms": "Terms", "/privacy": "Privacy" }
};

const App = ({ title = "", children = <span /> }) => {
  useEffect(() => {
    document.title = `${title} - ${SITE}`;
  }, []);

  return (
    <>
      <header>
        <Nav links={LINKS.header} />
      </header>
      <main>{children}</main>
      <footer>
        <Nav links={LINKS.footer} />
      </footer>
    </>
  );
};

export default App;
