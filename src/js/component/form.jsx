import React, {useState, useContext} from "react";
import {Context} from "../store/appContext.js";
import {Navigate} from "react-router-dom"
import { Link } from "react-router-dom";

const Form = () => {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const {store, actions}=useContext(Context)

  function enviarDatos(e) {
    e.preventDefault()
    actions.login(email,password)
    setEmail("")
    setPassword("")
  }
  return (
    <>
    {store.auth === true ? <Navigate to="/home"/>:
    <form className="w-50 mx-auto" onSubmit={enviarDatos}>
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
        <Link to="/">
        <button type="button" className="btn btn-warning text-dark">Sign Up</button>
        </Link>
        <button type="submit" className="btn btn-secondary">
          Log In
        </button>
      </div>
    </form>}
    </>
    
  );
};

export default Form;