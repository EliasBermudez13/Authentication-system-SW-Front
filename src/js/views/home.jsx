import React, {useEffect, useState, useContext} from "react";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Card2 } from "../component/card2.jsx";
import { Card3 } from "../component/card3.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {
	const {store} = useContext(Context);
	return(
		<>
		<h1 className="text-danger mb-2 mx-5">Characters</h1>
		<div className="container">
			<div className="d-flex scrollable">
				{store.people.map((item,index)=><Card item={item} key={item} name={item.name} gender={item.mass} hair={item.hair_color} 
				eye={item.eye_color} id={index+1}/>)}
			</div>
		</div>
		<h1 className="text-danger my-4 mx-5">Planets</h1>
		<div className="container">
			<div className="d-flex scrollable">
				{store.planets.map((item,index)=><Card2 url={item.url} item={item} key={item} name={item.name} popu={item.population} terra={item.terrain} id={index+1}/>)}
			</div>
		</div>
		<h1 className="text-danger my-4 mx-5">Vehicles</h1>
		<div className="container">
			<div className="d-flex scrollable">
				{store.vehicles.map((item,index)=><Card3 url={item.url} item={item} key={item} name={item.name} model={item.model} passengers={item.passengers} id={index+1}/>)}
			</div>
		</div>
	</>
);
}
