import React from 'react';
import Msg from './Msg';
import firebase from "../lib/firestore";


class MsgList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            loading: true,
        }
    }

    componentDidMount() {           
        const db = firebase.firestore();

        let doc = db.collection('tweets');

        let observer = doc.onSnapshot(docSnapshot => {
            console.log(`Received doc snapshot: `, docSnapshot.docs);
            const tweetsList = [];
            docSnapshot.docs.forEach((tweet) => {
                console.log(tweet.data())
                // Object.keys(tweet.doc._document.proto.fields)
                tweetsList.unshift(tweet.data())
            })
            this.setState({ loading: false, messages: tweetsList })
            // ...
        }, err => {
            console.log(`Encountered error: ${err}`);
        });
    }


    componentDidUpdate(prevProps) {
        if (prevProps.newTweet !== this.props.newTweet) {
            console.log("component updated")
            this.setState(state => {
                console.log(state.messages)
                const messages = [this.props.newTweet].concat(state.messages)
                return {
                    messages,
                }
            })
        }

    }

    render() {
        const { messages } = this.state;
        return (
            <div>
                {this.state.loading && <span className="msg-box loading">Loading...</span>}

                {!this.state.loading && messages.map(msgObj => {
                    return (
                        <Msg key={msgObj.date} user={msgObj.userName} date={msgObj.date} msg={msgObj.content} />
                    )
                })}
            </div>
        )
    }
}

export default MsgList;