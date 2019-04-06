import React, { Component } from 'react'
import './App.css'
import BitlyBar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BitlyBar />
        <div className="mantra">
          SHORTEN. SHARE. MEASURE.
        </div>
        <p className="motto">Join Bitly, The world's leading link management platform.</p>
      </div>
    )
  }
}

export default App
