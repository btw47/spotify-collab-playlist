import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { firebaseApp } from './server/firebase';

import Home from './containers/Home/';
import SignIn from './containers/Auth/SignIn';
import SignUp from './containers/Auth/SignUp';
import Dashboard from './containers/Dashboard';
import Playlist from './containers/Playlist';
import CreatePlaylist from './containers/CreatePlaylist';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/playlist" component={Playlist} />
            <Route path="/create" component={CreatePlaylist} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
