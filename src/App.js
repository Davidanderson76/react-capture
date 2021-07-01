import React from "react";
//GLOBAL STYLE
import GlobalStyle from "./components/GlobalStyle";
//IMPORT PAGES
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
