import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-between">
			<Link to="/">
			<img className="bg-black ms-5" id="local-nav-logo-desktop" src="https://w7.pngwing.com/pngs/792/718/png-transparent-skellig-michael-chewbacca-star-wars-computer-icons-star-wars-text-logo-desktop-wallpaper.png" alt="Star Wars Logo" style={{width: "70px"}}/>
			</Link>
			<div className="me-5 dropdown">
				<Link to="/demo">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
						</button>
						<ul className="dropdown-menu">
							<li><button className="dropdown-item" type="button">Action</button></li>
							<li><button className="dropdown-item" type="button">Another action</button></li>
							<li><button className="dropdown-item" type="button">Something else here</button></li>
						</ul>
				</Link>
			</div>
		</nav>
	);
};
