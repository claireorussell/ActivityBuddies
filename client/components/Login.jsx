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
            <div className='wrapper'>
                <div className="register-wrapper">
                    <div className="register-column-one">
                        <h2> Login </h2>
                    </div>

                    <div className='register-column-two'>
                        <div className='rego-wrapper'></div>
                        <label>Username:</label>
                        <input className='rego-input' type="text" name="username" onChange={this.handleChange} />
                        <label>Password:</label>
                        <input className='rego-input' type="password" name="password" onChange={this.handleChange} />
                        <br></br>

                        <button className='rego-button' type='button' onClick={this.handleClick}>Login</button>
                        <Link to="/register" className='rego-link'><p> Create your account →  </p></Link>
                    </div>
                </div>


                </div>
        )
    }
}

export default Login