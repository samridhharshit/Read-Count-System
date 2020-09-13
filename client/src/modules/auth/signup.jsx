import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import axios from 'axios'

export default function Signup() {
    const [isSignedUp, setIsSignedIp] = useState(false)
    const [signUpFail, setSignUpFail] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSignup = async (e) => {
        e.preventDefault()
        setLoading(true)
        const { fullName, email, p1, p2 } = e.target.elements
        console.log(fullName.value, email.value, p1.value, p2.value)

        if (p1.value !== p2.value) {
            alert('Passwords do not match. Enter again...')
            setLoading(false)
        }

        const obj = {
            fName: fullName.value.split(" ")[0],
            lName: fullName.value.split(" ")[1],
            email: email.value,
            password: p1.value
        }
        const response = await axios.post('/api/user/signup', obj)
        console.log(response.data.success)
        if (response.data.success) {
            setIsSignedIp(true)
        } else {
            alert(response.data.message)
            setSignUpFail(true)
            setLoading(false)
        }
    }

    if (isSignedUp) {
        return <Redirect to={'/storiesList'} />
    }
    if (signUpFail) {
        return <Redirect to={'/'} />
    }
    return (
        <div className="container col-6 align-content-center registration">
            <h1>Register</h1>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input name="fullName" type="text" className="form-control" id="fullName" required={true} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required={true} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input name="p1" type="password" className="form-control" id="password" required={true} />
                </div>
                <div className="form-group">
                    <label htmlFor="confrm-password">Confirm Password</label>
                    <input name="p2" type="password" className="form-control" id="confrm-password" required={true} />
                </div>
                {
                    loading ? (
                        <button type="submit" className="btn btn-primary">Signing you up...</button>
                    ) : (
                        <button type="submit" className="btn btn-primary">Submit</button>
                    )
                }

            </form>
            <br />
            <p>Already registered?<Link to={'/login'}>Sign in</Link></p>

        </div>
    )
}