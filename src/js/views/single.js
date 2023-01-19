import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let id = params.theid;
	useEffect(()=>{
		actions.getSinglePerson(id);
	}, []);

	return (
		<div className="jumbotron w-75 mx-auto">
			<div className="d-flex">
			<img src={"https://starwars-visualguide.com/assets/img/characters/"+ (id) +".jpg"} className="mb-4" alt="luke" style={{height:"300px", width:"420px"}}/>
			<div className="col mb-4">
			<h5 className="display-5 text-end me-5 ms-4 mt-3">{store.person.name}</h5>
			<p className="text-center p-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor architecto eaque libero debitis iste velit fuga nemo voluptate; Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
			</div>
			</div>
			<hr className="my-4 text-danger text-center" style={{height: "5px"}}/>	
					<div className="row row-cols-7 text-danger text-center">
						<div className="col"><h5>Mass</h5> <p className="fw-normal">{store.person.mass}</p></div>
						<div className="col"><h5>Birth Year</h5> <p className="fw-normal">{store.person.birth_year}</p></div>
						<div className="col"><h5>Gender</h5> <p className="fw-normal">{store.person.gender}</p></div>
						<div className="col"><h5>Height</h5><p className="fw-normal">{store.person.height}</p></div>
						<div className="col"><h5>Skin Color</h5> <p className="fw-normal">{store.person.skin_color}</p></div>
						<div className="col"><h5>Eye color</h5> <p className="fw-normal">{store.person.eye_color}</p></div>
						<div className="col"><h5>Hair color</h5> <p className="fw-normal">{store.person.hair_color}</p></div>
					</div>	
		</div>
		
	);
};

Single.propTypes = {
	match: PropTypes.object
};
