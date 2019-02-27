import React, { Component } from 'react'
import './App.css'
import DogsListContainer from './components/DogsListContainer'
import { Route } from 'react-router-dom'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'
import Clock from 'react-live-clock'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
        <Clock format={'HH:mm:ss'} ticking={true} />
        </header>
        <main>
        <Route exact path="/" component={DogsListContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
        </main>
      </div>
    );
  }
}

export default App;
