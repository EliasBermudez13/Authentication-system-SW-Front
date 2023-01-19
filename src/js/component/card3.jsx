import React, {useContext}from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Card3 = (props) => {
	let item = props.item;
	const {actions} = useContext(Context); 
    return(
        <div className="col m-4">
			<div className="card h-100 bg-secondary" style={{width:"20rem"}}>
				<img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (props.url.match(/\d+/g)) + ".jpg"} className="card-img-top" alt="luke"/>
				<div className="card-body text-warning">
					<h4 className="card-title">{props.name}</h4>
					<hr className="my-4 text-danger" style={{height: "5px"}}/>
					<p className="card-text">Model: {props.model}</p>
					<p className="card-text">Passengers: {props.passengers}</p>
					<div className="d-flex justify-content-between">
						<Link className="btn  btn-outline-dark text-black" to={"/singleVehicle/"+ (item.url.match(/\d+/g))}>Learn more!</Link>
						<button className="btn btn-outline-secondary" onClick={()=>actions.addToFavorites(item)}><i className={actions.changeColor(item)}></i></button>
					</div>
				</div>
			</div>
        </div>
    );
}