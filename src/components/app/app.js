import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service'
import ErrorIndicator from '../error-indicator'
import {SwapiServiceProvider} from '../swapi-service-context'

import './app.css';

import {
  PersonList,
  PlanetList,
  StarshiList,
  PersonDetails,
  PlanetDetails,
  StarshiDetails
} from '../sw-components'

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    selectedPerson: null,
    hasError: false
  };

  componentDidCatch() {
    console.log('componentDidCatch()');
    this.setState({hasError: true});
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <SwapiServiceProvider value ={this.swapiService}>
        <div className="stardb-app">
        
          <Header />

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshiDetails itemId={9} />

          <PersonList />

          <StarshiList />

          <PlanetList />

          
        </div>
      </SwapiServiceProvider>
    );
  }
}