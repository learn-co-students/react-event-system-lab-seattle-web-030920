// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

    enterPwd = () => {
        console.log("Entering password...")
    }
    render () {
        return (
            <input type="password" onKeyUp={this.enterPwd} />
        )
    }
}

export default Keypad