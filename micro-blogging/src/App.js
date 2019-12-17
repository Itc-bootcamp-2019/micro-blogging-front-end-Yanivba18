import React from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import TweetBox from './components/TweetBox';
import MsgList from './components/MsgList';
import NavBar from './components/Navbar';
import Profile from './components/Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currTweet: undefined,
    }
  }

  getTweetCallback = (tweet) => {
    this.setState({ currTweet: tweet }, () => {console.log(this.state)})
  }

  render() {

    return (
      <Router>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <TweetBox callback={this.getTweetCallback}/>
              <MsgList newTweet={this.state.currTweet}/>
            </Route>
            <Route exact path="/profile/">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
