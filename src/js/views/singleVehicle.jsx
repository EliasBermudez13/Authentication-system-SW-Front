import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let id = params.theid;

	useEffect(()=>{
		actions.getSingleVehicle(id);
	}, []);

	return (
	<>
		<div className="container bg-black rounded-2 mb-5" style={{height:"650px"}}>
			<div className="jumbotron mx-auto d-flex h-50">
				<img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (id) + ".jpg"} className="m-4 rounded-1 border border-danger border-3" alt="luke" style={{height:"300px", width:"420px"}}/>
				<div className="col mb-4">
				<h5 className="display-5 text-center m-4 text-warning">{store.vehicle.name}</h5>
				<p className="text-center p-4 text-warning">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, molestiae alias, nihil ea aut at velit suscipit ad nemo sapiente sint ipsa quaerat accusamus, est repudiandae maxime consectetur laudantium doloremque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor architecto eaque libero debitis iste velit fuga nemo voluptate; Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>
			<hr className="my-5 text-danger" style={{height: "5px"}}/>	
			<div className="row row-cols-10 text-danger text-center">
				<div className="col"><h5>Cargo capacity</h5> <p className="fw-normal">{store.vehicle.cargo_capacity}</p></div>
				<div className="col"><h5>Consumables</h5> <p className="fw-normal">{store.vehicle.consumables}</p></div>
				<div className="col"><h5>Cost in credits</h5> <p className="fw-normal">{store.vehicle.cost_in_credits}</p></div>
				<div className="col"><h5>Created</h5><p className="fw-normal">{store.vehicle.created}</p></div>
				<div className="col"><h5>Crew</h5> <p className="fw-normal">{store.vehicle.crew}</p></div>
				<div className="col"><h5>Length</h5> <p className="fw-normal">{store.vehicle.length}</p></div>
                <div className="col"><h5>Manufacturer</h5> <p className="fw-normal">{store.vehicle.manufacturer}</p></div>
                <div className="col"><h5>Max atm speed</h5> <p className="fw-normal">{store.vehicle.max_atmosphering_speed}</p></div>
				<div className="col"><h5>Model</h5> <p className="fw-normal">{store.vehicle.model}</p></div>
                <div className="col"><h5>Passengers</h5> <p className="fw-normal">{store.vehicle.passengers}</p></div>
			</div>	
		</div>
	</>
	);
};

SingleVehicle.propTypes = {
	match: PropTypes.object
};
