import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import { connect } from 'react-redux'

function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        const { email, password } = e.target.elements
        // console.log(email.value, password.value)

        const obj = {
            email: email.value,
            password: password.value
        }
        const response = await axios.post('/api/user/login', obj)
        // console.log(response.data)
        if (response.data.success) {
            setLoggedIn(true)
            props.provideUserDetails(await response.data.data)
        } else {
            alert(response.data.message)
            setLoading(false)
        }
    }

    if (isLoggedIn) {
        return <Redirect to={'/storiesList'} />
    }
    return (
        <div className="container col-6 align-content-center login">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                {
                    loading ? (
                        <button type="submit" className="btn btn-primary">Logging in...</button>
                    ) : (
                        <button type="submit" className="btn btn-primary">Submit</button>
                    )
                }
            </form>
            <br />
            <p><Link to={'/'} >Register here</Link>, if you are not already registerd</p>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        provideUserDetails: (userData) => {dispatch({ type: 'MOUNT_USER', userData })}
    }
}

export default connect(null, mapDispatchToProps)(Login)