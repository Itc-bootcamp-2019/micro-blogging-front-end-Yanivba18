import React from 'react';

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
        this.setState({ loading: false }) //remember to change back to true once the check is correct
        const { callback } = this.props;

        const date = new Date();
        const today = date.toISOString();

        let userName = localStorage.getItem("userName");

        if (userName === null) {
            userName = '@DefaultUser';
        }

        const payload = this.createJsonPayload(userName, this.state.input, today);
        callback(payload);

    
        this.setState({ input: '' });
    }

    createJsonPayload(userName, content, date) {
        return {
            content: content,
            date: date,
            userName: userName,
        }
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
                        <button type="button" disabled={!this.state.inputValid || this.state.loading} className="btn-blue" onClick={() => { this.btnOnClick() }}>Tweet</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default TweetBox;