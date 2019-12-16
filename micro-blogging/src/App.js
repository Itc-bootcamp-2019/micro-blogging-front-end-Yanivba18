import React from 'react';
import logo from './logo.svg';
import './App.css';
import TweetBox from './components/TweetBox';
import MsgList from './components/MsgList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currMsg: '',
    }
  }

  render(){

    return (
      <div className="App">
        <TweetBox />
        <MsgList />
      </div>
    );
  }
}

export default App;
