import React from 'react';

function Msg(props) {
    const { user, date, msg } = props;
    

    return (
        <div className="msg-box">
            <div className="msg header">
                <span>
                    { user }
                </span>
                <span>
                    { date }
                </span>
            </div>
            <div className="msg body">
                { msg }
            </div>
        </div>
    )
}

export default Msg;