import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicTitle: '',
    };
  }

  getMusicTitle = (title) => {
    this.setState({ musicTitle: title });
  };

  render() {
    const { musicTitle } = this.state;
    return (
      <div className='stopwatch'>
        <h1>Live Player</h1>
        <div className='allButtons'>
          <MusicPlayer getMusicTitle={this.getMusicTitle} />
        </div>
        <div id='title-container'>
          <h4>{musicTitle}</h4>
        </div>
        {Footer()}
      </div>
    );
  }
}

export default App;
