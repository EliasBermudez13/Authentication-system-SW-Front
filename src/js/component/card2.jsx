import React from "react";
import { Link } from "react-router-dom";

export const Card2 = (props) => {
	let id = props.id;
    return(
		<div className="col m-4">
		<div className="card" style={{width:"20rem"}}>
				<img src={"https://starwars-visualguide.com/assets/img/planets/" + (id) + ".jpg"} className="card-img-top" alt="luke"/>
				<div className="card-body">
					<h4 className="card-title">{props.name}</h4>
					<p className="card-text">Population: {props.popu}</p>
					<p className="card-text">Terrain: {props.terra}</p>
					<div className="d-flex justify-content-between">
						<Link className="btn btn-outline-primary" to={"/singlePlanet/"+ props.id}>Learn more!</Link>
						<Link className="btn btn-outline-warning"><i className="fa fa-heart"></i></Link>
					</div>
				</div>
			</div>
		</div>
    );
}