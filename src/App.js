import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import OneOfTheWelcomes from './components/Welcome'
import WhatNowThen from './components/WhatNow'
import Message from './components/Message'

class App extends Component{
  render() {
    return (
      <div className="App">
        <Message />
      {/*
        <Greet name="Suvi-Tuulia" isKeenOn="maths">
        <p>This is a child component</p>
        </Greet>
        <Greet name="Hannu" isKeenOn="literature" />
        <Greet name="kerttu" isKeenOn="physics" />
        <OneOfTheWelcomes  name="Suvi-Tuulia" isKeenOn="maths" />
        <OneOfTheWelcomes name="Hannu" isKeenOn="literature" />
        <OneOfTheWelcomes name="kerttu" isKeenOn="physics" />
        <WhatNowThen />*/}
      </div>
    );
  }
}

export default App;
