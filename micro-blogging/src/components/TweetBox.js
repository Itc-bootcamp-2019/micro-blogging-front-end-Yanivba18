import React from 'react';

class TweetBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
        }
    }

    onInputChange(e) {
        this.setState({ input: e.target.value });
    }

    render() {
        return (
            
            <div className="tweet-box">
                <textarea className="tweet-box-input" value={this.state.input} onChange={(e) => { this.onInputChange(e) }} placeholder="What's on your mind..." >
                </textarea>

            </div>
            
        )
    }
}

export default TweetBox;