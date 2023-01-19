import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Card = (props) => {
	let id = props.id;
	let item = props.item;
	const {actions} = useContext(Context); 
    return(
		<div className="col m-4">
		<div className="card" style={{width:"20rem"}}>
				<img src={"https://starwars-visualguide.com/assets/img/characters/"+ (id) +".jpg"} className="card-img-top" alt="luke"/>
				<div className="card-body">
					<h4 className="card-title">{props.name}</h4>
					<p className="card-text">Gender: {props.gender}</p>
					<p className="card-text">Hair color: {props.hair}</p>
					<p className="card-text">Eye color: {props.eye}</p>
					<div className="d-flex justify-content-between">
						<Link className="btn btn-outline-primary" to={"/single/"+ props.id}>Learn more!</Link>
						<button type="button" className="btn btn-outline-light" onClick={()=>actions.addToFavorites(item)}><i className={actions.changeColor(item)}></i></button>
					</div>
				</div>
			</div>
		</div>
    );
}

