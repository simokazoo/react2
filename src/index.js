import React, { Component } from 'react';

import ReactDOM from 'react-dom' 
import './index.css';

import RegistrationForm from './components/RegistrationForm';
import Webpage from './components/Webpage';


export class App extends Component {
    render() {
      return (
        <div id="app">
            <RegistrationForm />
            <Webpage />
        </div>
      )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))