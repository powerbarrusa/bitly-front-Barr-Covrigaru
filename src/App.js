import React, { Component } from 'react'
import './App.css'
import BitlyBar from './components/BitlyBar'

class App extends Component {
  
  constructor(){
    super()
    this.state = {
    }
  }



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
