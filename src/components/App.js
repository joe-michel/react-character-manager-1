import React, { Component } from 'react';
import '../css/App.css';
import Routes from './Routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)



class App extends Component {
  render() {

    return (
      <React.Fragment>
        <img className="vh-50 w-100 ofc"src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2015/06/marvel.png" alt="superheros"/>
        <div className="container">
          <Routes />





        </div>
      </React.Fragment>
    )
  }
}

export default App;
