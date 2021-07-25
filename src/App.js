import React from "react";
//GLOBAL STYLE
import GlobalStyle from "./components/GlobalStyle";
//IMPORT PAGES
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
