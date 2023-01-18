import React, {useEffect, useState, useContext} from "react";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Card2 } from "../component/card2.jsx";
import { Card3 } from "../component/card3.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {
	const {store} = useContext(Context);
	// const [allPeople, setAllPeople] = useState([]);
	// const [allPlanets, setAllPlanets] = useState([]);
	// const [allVehicles, setAllVehicles] = useState([]);
	
	// const getAllPeople = () => {
	// 	fetch("https://swapi.dev/api/people/")
	// 	.then(res => res.json())
	// 	.then(data => setAllPeople(data.results))
	// 	.catch(err => console.error(err))
	// }

	// const getAllPlanets = () => {
	// 	fetch("https://swapi.dev/api/planets/")
	// 	.then(res => res.json())
	// 	.then(data => setAllPlanets(data.results))
	// 	.catch(err => console.error(err))
	// }

	// const getAllVehicles = () => {
	// 	fetch("https://swapi.dev/api/vehicles/")
	// 	.then(res => res.json())
	// 	.then(data => setAllVehicles(data.results))
	// 	.catch(err => console.error(err))
	// }

	// useEffect(()=>{
	// 	getAllPeople();
	// 	getAllPlanets();
	// 	getAllVehicles();
	// },[]);

	return(
		<>
		<h1 className="text-danger mb-4">Characters</h1>
		<div className="container">
		<div className="d-flex scrollable">
			{store.people.map((item,index)=><Card key={item} name={item.name} gender={item.mass} hair={item.hair_color} 
			 eye={item.eye_color} id={index+1}/>)}
		</div>
		</div>
		<h1 className="text-danger my-4">Planets</h1>
		<div className="d-flex scrollable">
		{store.planets.map((item,index)=><Card2 key={item} name={item.name} popu={item.population} terra={item.terrain} id={index+1}/>)}
		</div>
		<h1 className="text-danger my-4 ">Vehicles</h1>
		<div className="d-flex scrollable">
		{store.vehicles.map((item,index)=><Card3 key={item} name={item.name} model={item.model} passengers={item.passengers} id={index+1}/>)}
		</div>
	</>
);
}
