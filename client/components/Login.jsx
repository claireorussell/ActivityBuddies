import React from 'react'
import { signIn, isAuthenticated } from 'authenticare/client'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()

        signIn({
            username: this.state.username,
            password: this.state.password
        }, {
            baseUrl: process.env.BASE_API_URL // see .env and webpack.config.js
        })
            .then((token) => {
                if (isAuthenticated()) {
                    // window.location.reload(false)
                    this.props.history.push('/')
                }
            })
    }

    render() {
        return (
            <div className='activity-container'>
                <div className="register-wrapper">
                <div className='register-column-two'>
                        <h2> Login </h2>
                        <div className='rego-wrapper'>
                            <label className='rego-label'>Username:</label>
                            <input className='rego-input' type="text" name="username" onChange={this.handleChange} />
                        </div>
                        <div className='rego-wrapper'>
                            <label className='rego-label'>Password:</label>
                            <input className='rego-input' type="password" name="password" onChange={this.handleChange} />
                        </div>
                        <button className='rego-button' type='button' onClick={this.handleClick}>Submit</button>
                    </div>
                </div>


                </div>
        )
    }
}

export default Login