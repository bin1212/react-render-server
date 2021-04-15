import React from 'react'
import './login.css'

class Login extends React.Component{
    render(){
        return(
            <div onClick={()=>{this.props.history.push('list')}} className="loginContainer">
                login
            </div>
        )
    }
}

export default Login