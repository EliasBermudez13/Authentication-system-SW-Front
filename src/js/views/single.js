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
		<>
		<div className="container bg-black rounded-2 mb-5" style={{height:"650px"}}>
		<div className="jumbotron mx-auto d-flex h-50">
			<img src={"https://starwars-visualguide.com/assets/img/characters/"+ (id) +".jpg"} className="m-4 rounded-1 border border-danger border-3" alt="luke" style={{height:"300px", width:"420px"}}/>
			<div className="col mb-4">
			<h5 className="display-5 text-center m-4 text-warning">{store.person.name}</h5>
			<p className="text-center p-4 text-warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure impedit dolores, atque ipsam recusandae fugiat cumque, cupiditate, molestiae modi amet ullam voluptates perspiciatis! Assumenda quibusdam, repellendus dicta sit similique optio. lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor architecto eaque libero debitis iste velit fuga nemo voluptate; Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
			</div>
		</div>	
		<hr className="my-4 text-danger" style={{height: "5px"}}/>	
			<div className="row row-cols-7 text-danger text-center m-5">
				<div className="col m-2"><h5>Mass</h5> <p className="fw-normal">{store.person.mass}</p></div>
				<div className="col m-2"><h5>Birth Year</h5> <p className="fw-normal">{store.person.birth_year}</p></div>
				<div className="col m-2"><h5>Gender</h5> <p className="fw-normal">{store.person.gender}</p></div>
				<div className="col m-2"><h5>Height</h5><p className="fw-normal">{store.person.height}</p></div>
				<div className="col m-2"><h5>Skin Color</h5> <p className="fw-normal">{store.person.skin_color}</p></div>
				<div className="col m-2"><h5>Eye color</h5> <p className="fw-normal">{store.person.eye_color}</p></div>
				<div className="col m-2"><h5>Hair color</h5> <p className="fw-normal">{store.person.hair_color}</p></div>
			</div>	
		</div>
		</>	
	);
};

Single.propTypes = {
	match: PropTypes.object
};
