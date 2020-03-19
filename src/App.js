import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Alert from "./components/Alert";
import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";

function App() {
  return (
      <GithubState>
          <AlertState>
              <BrowserRouter>
                  <Navbar/>
                  <div className="container pt-4">
                    <Alert/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/profile/:name" component={Profile}/>
                    </Switch>
                  </div>
              </BrowserRouter>
          </AlertState>
      </GithubState>
  );
}

export default App;
