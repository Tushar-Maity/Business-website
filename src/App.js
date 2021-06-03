import React from 'react';
import Navbar from "./components/Navbar";
import GlobalStyle from "./components/GlobalStyles"
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
       <GlobalStyle />
       <Navbar />
       Landing Page
    </div>
  );
}

export default App;
