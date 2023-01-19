import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
// https://toppng.com/uploads/preview/star-wars-logo-png-transparent-logo-de-star-wars-115632812418hmv74rhox.png
export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-black mb-5 d-flex justify-content-between">
			<Link to="/">
			<img className="bg-black ms-5" id="local-nav-logo-desktop" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png" alt="Star Wars Logo" style={{width: "70px"}}/>
			</Link>
			<div className="me-5 dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites<span className="p-1 m-2 rounded-1">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu">
						{store.favorites.map((item, id) => <li className="d-flex justify-content-between"><Link to={actions.setRoutefunc(item)+ (item.url.match(/\d+/g))} className="dropdown-item float-start" key={id}>{item.name}</Link><button type="button" className="btn border-0 float-end"  onClick={() => actions.deleteFavorite(item)}><i className="fa fa-trash"></i></button></li>)}
						</ul>	
			</div>	
		</nav>
	);
};
