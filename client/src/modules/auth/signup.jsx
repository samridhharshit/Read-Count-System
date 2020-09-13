import React from "react";
import {Link} from "react-router-dom";

export default function Signup() {

    const handleSignup = (e) => {
        e.preventDefault()
        const { fullName, email, p1, p2 } = e.target.elements
        console.log(fullName.value, email.value, p1.value, p2.value)
    }

    return (
        <div className="container col-6 align-content-center registration">
            <h1>Register</h1>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input name="fullName" type="text" className="form-control" id="fullName" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input name="p1" type="password" className="form-control" id="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confrm-password">Confirm Password</label>
                    <input name="p2" type="password" className="form-control" id="confrm-password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br />
            <p>Already registered?<Link to={'/login'}>Sign in</Link></p>

        </div>
    )
}