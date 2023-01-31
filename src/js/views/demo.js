import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import Form from "../component/form.jsx";

export const Demo = () => (
	<div className="text-center mt-5">
		<Form/>
	</div>
);
