import React from 'react';
import './App.css';
import History from './components/History';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Address from './components/Address';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <History/>
          </Route>
          <Route  path="/address">
            <Address/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
