import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './containers/Home/';
import Dashboard from './containers/Dashboard';
import Playlist from './containers/Playlist';
import CreatePlaylist from './containers/CreatePlaylist';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/playlist" component={Playlist} />
            <Route path="/create" component={CreatePlaylist} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
