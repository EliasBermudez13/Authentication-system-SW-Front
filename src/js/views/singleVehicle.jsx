import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [vehicle, setVehicle] = useState([])

	const getSingleVehicle = () => {
		fetch("https://swapi.dev/api/vehicles/" + params.theid)
		.then(res => res.json())
		.then(data => setVehicle(data))
		.catch(err => console.error(err))
	}

	useEffect(()=>{
		getSingleVehicle();
	}, []);

	let id = params.theid;
	return (
		<div className="jumbotron w-75 mx-auto">
			<div className="d-flex">
			<img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (id) + ".jpg"} className="mb-4" alt="luke" style={{height:"300px", width:"420px"}}/>
			<div className="col mb-4">
			<h5 className="display-5 text-end me-5 ms-4 mt-3">{vehicle.name}</h5>
			<p className="text-center p-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor architecto eaque libero debitis iste velit fuga nemo voluptate; Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
			</div>
			</div>
			<hr className="my-4 text-danger text-center" style={{height: "5px"}}/>	
					<div className="row row-cols-11 text-danger text-center">
						<div className="col"><h5>Cargo capacity</h5> <p className="fw-normal">{vehicle.cargo_capacity}</p></div>
						<div className="col"><h5>Consumables</h5> <p className="fw-normal">{vehicle.consumables}</p></div>
						<div className="col"><h5>Cost in credits</h5> <p className="fw-normal">{vehicle.cost_in_credits}</p></div>
						<div className="col"><h5>Created</h5><p className="fw-normal">{vehicle.created}</p></div>
						<div className="col"><h5>Crew</h5> <p className="fw-normal">{vehicle.crew}</p></div>
						<div className="col"><h5>Edited</h5> <p className="fw-normal">{vehicle.terrain}</p></div>
						<div className="col"><h5>Length</h5> <p className="fw-normal">{vehicle.length}</p></div>
                        <div className="col"><h5>Manufacturer</h5> <p className="fw-normal">{vehicle.manufacturer}</p></div>
                        <div className="col"><h5>Max atmosphering speed</h5> <p className="fw-normal">{vehicle.max_atmosphering_speed}</p></div>
						<div className="col"><h5>Model</h5> <p className="fw-normal">{vehicle.model}</p></div>
                        <div className="col"><h5>Passengers</h5> <p className="fw-normal">{vehicle.passengers}</p></div>
					</div>	
		</div>
	);
};

SingleVehicle.propTypes = {
	match: PropTypes.object
};
