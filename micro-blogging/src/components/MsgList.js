import React from 'react';
import { getAllTweets } from "./api"
import Msg from './Msg';

class MsgList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            loading: true,
        }
    }

    componentDidMount() {
        setInterval(() => { this.updateTweets() }, 2500);
    }

    updateTweets() {
        getAllTweets().then((resolve) => {
            this.setState({
                messages: resolve.data.tweets,
                loading: false
            })
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.newTweet !== this.props.newTweet) {
            console.log("component updated")
            this.setState(state => {
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