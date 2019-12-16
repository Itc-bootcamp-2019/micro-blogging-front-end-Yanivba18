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
        getAllTweets().then((resolve) => {
            console.log(resolve)
            this.setState({
                messages: resolve.data.tweets,
                loading: false
            })
        })
    }

    render() {
        const { messages } = this.state;
        return (
            <div>
                {this.state.loading && <span className="msg-box loading">Loading...</span>}
                
                {!this.state.loading && messages.map(msgObj => {
                    return (
                        <Msg key={msgObj.date} user={msgObj.userName} date={msgObj.date} msg={msgObj.content}/>
                    )
                })}
            </div>
        )
    }
}

export default MsgList;