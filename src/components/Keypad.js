import React, {Component} from 'react'

class Keypad extends Component{

    handlePassword = () =>{
        console.log('Entering password...')
    }
    render(){
        return(    <input onKeyUp ={this.handlePassword} type="password" />
        )
    }
}

export default Keypad