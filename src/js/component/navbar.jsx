import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom"; 
import Swal from 'sweetalert2';

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	const navigate = useNavigate() //activamos useNavigate

	function handleLogout() {
		Swal.fire({
			title: 'Are you sure?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3d3e3f',
			cancelButtonColor: '#883737',
			confirmButtonText: 'Yes, log out!'
		}).then((result) => {
			if (result.isConfirmed) {
				actions.logout()
				Swal.fire(
				'Ok Good Bye!',
				'success'
			)
			navigate("/")
			}
			
		})

	}
	return (
		<nav className="navbar navbar-light bg-black mb-5 d-flex justify-content-between">
			<img className="bg-black ms-5" id="local-nav-logo-desktop" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png" alt="Star Wars Logo" style={{width: "70px"}}/>
			<div className="d-flex">
				<div className="me-5 dropdown">
							{store.auth === true? <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites<span className="p-1 m-2 rounded-1">{store.favorites.length}</span>
							</button> : null}
							<ul className="dropdown-menu">
							{store.favorites.map((item, id) => <li className="d-flex justify-content-between"><Link to={actions.setRoutefunc(item)+ (item.url.match(/\d+/g))} className="dropdown-item float-start" key={id}>{item.name}</Link><button type="button" className="btn border-0 float-end"  onClick={() => actions.deleteFavorite(item)}><i className="fa fa-trash"></i></button></li>)}
							</ul>	
				</div>
				<div className="ml-auto">
					{store.auth === true? <button className="btn btn-secondary mx-2" onClick={handleLogout}>Logout</button> : null}
				</div>
			</div>
		</nav>
	);
};
