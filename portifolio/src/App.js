import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import About from './pages/About';
import RedeSocial from './pages/RedeSocial';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact patch="/" component={ About }/>
        <Route patch="/rede" component={ RedeSocial } />
      </Switch>
    )
  }
}
