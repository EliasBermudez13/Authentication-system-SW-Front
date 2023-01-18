import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-between">
			<Link to="/">
			<img className="bg-black ms-5" id="local-nav-logo-desktop" src="https://w7.pngwing.com/pngs/792/718/png-transparent-skellig-michael-chewbacca-star-wars-computer-icons-star-wars-text-logo-desktop-wallpaper.png" alt="Star Wars Logo" style={{width: "70px"}}/>
			</Link>
			<div className="me-5 dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
						</button>
						<ul className="dropdown-menu">
						{store.favorites.map((item, id) => <li className="dropdown-item float-start" key={id}>{item.name} <button type="button" className="btn border-0 float-end"  onClick={() => actions.deleteFavorite(item)}><i className="fa fa-trash"></i></button></li>)}
						</ul>	
			</div>	
		</nav>
	);
};
