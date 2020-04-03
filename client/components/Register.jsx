import React from 'react'
import { register, isAuthenticated } from 'authenticare/client'

class Register extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        register({ // what's register? Do I put all the elements of state i.e user info into this??
            username: this.state.username,
            password: this.state.password, 
        }, {
            baseUrl: process.env.BASE_API_URL // see .env and webpack.config.js
        })
            .then((token) => {
                if (isAuthenticated()) {
                    this.props.history.push('/')
                }
            })
    }

    render() {

        return (
            <React.Fragment>
                <div className="register-wrapper">
                    <div className="register-column-one">
                        <h2> Create An Account </h2>
                    </div>
                    <div className='register-column-two'>
                        <div className='rego-wrapper'>
                            
                            <label>Username:</label>
                            <input className='rego-input' type="text" name="username" onChange={this.handleChange} />
                           
                            <label>Password:</label>
                            <input className='rego-input' type="password" name="password" onChange={this.handleChange} />
                           
                            <br />
                            <button className='rego-button' type='button' onClick={this.handleClick}>Register</button>
                        </div>

                    </div>


                </div>
            </React.Fragment>
        )
    }
}

export default Register
