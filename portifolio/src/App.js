import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import Index from './pages/Index/Index';
import About from './pages/About/About';
import RedeSocial from './pages/RedeSocial/RedeSocial';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Index }/>
        <Route path="/about" component={ About } />
        <Route path="/rede" component={ RedeSocial } />
      </Switch>
    )
  }
}
