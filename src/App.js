import React from 'react';
import Navbar from "./components/Navbar";
import GlobalStyle from "./components/GlobalStyles"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
       <GlobalStyle />
       <Navbar />
    </Router>
  );
}

export default App;
