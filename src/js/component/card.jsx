import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
//test
export const Card = (props) => {
	let id = props.id;
	let item = props.item;
	const {actions} = useContext(Context); 
    return(
		<div className="col m-4 ">
		<div className="card h-100 bg-secondary" style={{width:"20rem"}}>
				<img src={"https://starwars-visualguide.com/assets/img/characters/"+ (id) +".jpg"} className="card-img-top" alt="luke"/>
				<div className="card-body text-warning">
					<h4 className="card-title">{props.name}</h4>
					<hr className="my-4 text-danger" style={{height: "5px"}}/>
					<p className="card-text">Gender: {props.gender}</p>
					<p className="card-text">Hair color: {props.hair}</p>
					<p className="card-text">Eye color: {props.eye}</p>
					<div className="d-flex justify-content-between">
						<Link className="btn btn-outline-dark text-black" to={"/single/"+ props.id}>Learn more!</Link>
						<button type="button" className="btn btn-outline-secondary" onClick={()=>actions.addToFavorites(item)}><i className={actions.changeColor(item)}></i></button>
					</div>
				</div>
			</div>
		</div>
    );
}

