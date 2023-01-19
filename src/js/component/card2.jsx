import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Card2 = (props) => {
	let id = props.id;
	let item = props.item;
	const {actions} = useContext(Context);
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
						<button className="btn btn-outline-light" onClick={()=>actions.addToFavorites(item)}><i className={actions.changeColor(item)}></i></button>
					</div>
				</div>
			</div>
		</div>
    );
}