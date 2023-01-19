import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let id = params.theid;

	useEffect(()=>{
		actions.getSinglePlanet(id);
	}, []);


	return (
	<>
		<div className="container bg-black rounded-2 mb-5" style={{height:"650px"}}>
			<div className="jumbotron mx-auto d-flex h-50">
				<img src={"https://starwars-visualguide.com/assets/img/planets/" + (id) + ".jpg"} className="m-4 rounded-1 border border-danger border-3" alt="luke" style={{height:"300px", width:"420px"}}/>
				<div className="col mb-4">
				<h5 className="display-5 text-center m-4 text-warning">{store.planet.name}</h5>
				<p className="text-center p-4 text-warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. A aspernatur, dicta tenetur libero inventore fuga pariatur? Porro, mollitia est in ipsam quia ratione impedi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor architecto eaque libero debitis iste velit fuga nemo voluptate; Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>
			<hr className="my-5 text-danger" style={{height: "5px"}}/>	
			<div className="row row-cols-8 text-danger text-center">
				<div className="col m-2"><h5>Rotation period</h5> <p className="fw-normal">{store.planet.rotation_period}</p></div>
				<div className="col m-2"><h5>Orbital period</h5> <p className="fw-normal">{store.planet.orbital_period}</p></div>
				<div className="col m-2"><h5>Diameter</h5> <p className="fw-normal">{store.planet.diameter}</p></div>
				<div className="col m-2"><h5>Climate</h5><p className="fw-normal">{store.planet.climate}</p></div>
				<div className="col m-2"><h5>Gravity</h5> <p className="fw-normal">{store.planet.gravity}</p></div>
				<div className="col m-2"><h5>Terrain</h5> <p className="fw-normal">{store.planet.terrain}</p></div>
				<div className="col m-2"><h5>Surface water</h5> <p className="fw-normal">{store.planet.surface_water}</p></div>
                <div className="col m-2"><h5>Population</h5> <p className="fw-normal">{store.planet.population}</p></div>
			</div>	
		</div>
	</>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};