import React from "react";
import {Link} from "react-router-dom";

export default function Login() {

    const handleLogin = (e) => {
        e.preventDefault()
        const { email, password } = e.target.elements
        console.log(email.value, password.value)
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br />
            <p><Link to={'/'} >Register here</Link>, if you are not already registerd</p>

        </div>
    )
}