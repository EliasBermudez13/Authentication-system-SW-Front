import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Card2 = (props) => {
	let id = props.id;
	let item = props.item;
	const {actions} = useContext(Context);
    return(
		<div className="col m-4">
		<div className="card h-100 bg-secondary" style={{width:"20rem"}}>
				<img src={"https://starwars-visualguide.com/assets/img/planets/" + (id) + ".jpg"} className="card-img-top" alt="Planet image not found"/>
				<div className="card-body text-warning">
					<h4 className="card-title">{props.name}</h4>
					<hr className="my-4 text-danger" style={{height: "5px"}}/>
					<p className="card-text">Population: {props.popu}</p>
					<p className="card-text">Terrain: {props.terra}</p>
					<div className="d-flex justify-content-between">
						<Link className="btn  btn-outline-dark text-black" to={"/singlePlanet/"+ props.id}>Learn more!</Link>
						<button className="btn btn-outline-secondary" onClick={()=>actions.addToFavorites(item)}><i className={actions.changeColor(item)}></i></button>
					</div>
				</div>
			</div>
		</div>
    );
}