import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            inputValid: false
        }
    }

    componentDidMount() {
        let userName = localStorage.getItem("userName");
        if (userName === null) {
            userName = '';
        }

        this.setState({ input: userName })
    }

    onClickSave() {
        console.log("State:" + this.state.input)
        localStorage.setItem("userName", this.state.input)
        this.setState({ input: '' })
    }

    onInputChange(e) {
        const value = e.target.value;
        console.log(value)
        this.setState({ input: value },
            () => { value.length > 0 ? this.setState({ inputValid: true }) : this.setState({ inputValid: false }) });
    }

    render() {
        return (
            <div className="Profile">
                <span className="title">Profile</span>
                <span className="sub-title">User Name</span>
                <input type="text" onChange={(e) => { this.onInputChange(e) }} value={this.state.input} />
                <button type="button" disabled={!this.state.inputValid} onClick={() => this.onClickSave()} className="btn-blue">Save</button>
            </div>
        )
    }
}



export default Profile;