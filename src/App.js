import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import TweetBox from './components/TweetBox';
import MsgList from './components/MsgList';
import NavBar from './components/Navbar';
import Profile from './components/Profile';
import firebase from "./lib/firestore";
import FirebaseAuth from './components/FirebaseAuth';
import { Modal, Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currTweet: undefined,
    }
  }

  getTweetCallback = (tweet) => {
    this.setState({ currTweet: tweet })
    this.writeTweetToFirestore(tweet);
  }

  writeTweetToFirestore(tweet) {
    const db = firebase.firestore();
    db.collection("tweets").doc(tweet.date).set(tweet)
      .then((response) => {
        console.log(response)
      });

  }

  render() {

    return (
      <Router>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <TweetBox callback={this.getTweetCallback} />
              <MsgList newTweet={this.state.currTweet} />
            </Route>
            <Route exact path="/profile/">
              <Profile />
            </Route>
          </Switch>
        </div>
        <Modal show={true}>
          <Modal.Header>
            <Modal.Title>Sign in</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FirebaseAuth />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </Router>
    );
  }
}

export default App;
