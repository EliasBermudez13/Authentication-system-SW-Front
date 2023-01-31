import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import Sign from "../component/sign.jsx";

export const SignUp = () => (
	<div className="text-center mt-5">
        <h1 className="text-light mb-5">Create a new user</h1>
		<Sign/>
	</div>
);
