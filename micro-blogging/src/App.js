import React from 'react';
import logo from './logo.svg';
import './App.css';
import TweetBox from './components/TweetBox';
import MsgList from './components/MsgList';
import NavBar from './components/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currMsg: '',
    }
  }

  render() {

    return (
      <>
        <NavBar />
        <div className="App">

          <TweetBox />
          <MsgList />
        </div>
      </>
    );
  }
}

export default App;
