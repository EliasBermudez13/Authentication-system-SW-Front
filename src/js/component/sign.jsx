import React, {useState, useContext} from "react";
import {Context} from "../store/appContext.js";
import {Navigate} from "react-router-dom"
import { Link } from "react-router-dom";

const Sign = () => {
const[userName,setUserName]=useState("")
const[firstName,setFirstName]=useState("")
const[email,setEmail]=useState("")
const[lastName,setLastName]=useState("")
const[password,setPassword]=useState("")
const {store, actions}=useContext(Context)

function enviarDatos(e) {
    e.preventDefault()
    actions.signup(userName, firstName, lastName, email, password)
    setUserName("")
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
}
return (
    <>
    {store.created === true ? <Navigate to="/login"/>:
    <form className="w-50 mx-auto" onSubmit={enviarDatos}>
        <div className="mb-3 d-flex">
            <input
                type="text"
                className="form-control"
                id="exampleInputUserName"
                value={userName}
                placeholder= "Username"
                onChange={(e)=>setUserName(e.target.value)}
            />
        </div>
        <div className="mb-3 d-flex">
            <input
                type="text"
                className="form-control"
                id="exampleInputFirstName"
                value={firstName}
                placeholder= "First Name"
                onChange={(e)=>setFirstName(e.target.value)}
            />
        </div>
        <div className="mb-3 d-flex">
            <input
                type="text"
                className="form-control"
                id="exampleInputLastName"
                value={lastName}
                placeholder= "Last Name"
                onChange={(e)=>setLastName(e.target.value)}
            />
        </div>
        <div className="mb-3 d-flex">
            <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                placeholder= "E-mail"
                onChange={(e)=>setEmail(e.target.value)}
            />
        </div>
        <div className="mb-3 d-flex">
            <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                placeholder= "Password"
                onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
        <div className="my-5 d-flex justify-content-between">
            <Link to="/login">
                <button type="button" className="btn btn-secondary">Login</button>
            </Link>
            <button type="submit" className="btn btn-warning text-dark">
            Sign Up
            </button>
        </div>
    </form>}
    </>
    );
};

export default Sign;