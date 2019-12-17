import React from 'react';
import { createTweet } from "./api"

class TweetBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            inputValid: true,
            loading: false,
        }
    }

    onInputChange(e) {
        const value = e.target.value.length;
        console.log(value)
        this.setState({ input: e.target.value },
            () => { this.validateField(value) });
    }

    validateField(value) {
        if (value > 140) {
            this.setState({ inputValid: false })
        } else {
            this.setState({ inputValid: true })
        }
    }

    btnOnClick() {
        // alert("Not implemented yet")
        // const { callback } = this.props;
        // callback(this.state.input);
        this.setState({ loading: true })
        createTweet(this.state.input, "@TestingUser").then(() => {
            this.setState({ loading: false })
        })
        .catch((response) => {
            alert("Tweet not saved: " + response);
            this.setState({ loading: false })
        });
        this.setState({ input: '' });
    }

    render() {
        return (

            <div className="tweet-box">
                <textarea className="tweet-box-input" disabled={this.state.loading} value={this.state.input} onChange={(e) => { this.onInputChange(e) }} placeholder="What's on your mind..." >
                </textarea>
                <div className="d-flex">
                    {!this.state.inputValid && <div className="invalid-input">
                        The tweet can't contain more then 140 chars.
                    </div>}
                    <div className="btn-div">
                        <button type="button" disabled={!this.state.inputValid || this.state.loading} className="btn" onClick={() => { this.btnOnClick() }}>Tweet</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default TweetBox;