import React from 'react';

class TweetBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            inputValid: true,
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
            this.setState( {inputValid: false} )
        } else {
            this.setState( { inputValid: true} )
        }
    }

    btnOnClick() {
        alert("Not implemented yet")
    }

    render() {
        return (
            
            <div className="tweet-box">
                <textarea className="tweet-box-input" value={this.state.input} onChange={(e) => { this.onInputChange(e) }} placeholder="What's on your mind..." >
                </textarea>
                <button type="button" disabled={!this.state.inputValid} className="btn" onClick={() => {this.btnOnClick()}}>Tweet</button>
            </div>
            
        )
    }
}

export default TweetBox;