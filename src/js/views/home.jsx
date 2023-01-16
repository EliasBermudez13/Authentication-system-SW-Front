import React from "react";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";

export const Home = () => (
	<div className="container">
		<h1 className="text-danger mb-4">Characters</h1>
		<div class="row row-cols-4 mb-5">
			<div class="col">
				<Card/>
			</div>
			<div class="col">
				<Card/>
			</div>
			<div class="col">
				<Card/>
			</div>
			<div class="col">
				<Card/>
			</div>
		</div>
		<h1 className="text-danger my-4">Planets</h1>
		<div class="row row-cols-4">
			<div class="col">
				<Card/>
			</div>
			<div class="col">
				<Card/>
			</div>
			<div class="col">
				<Card/>
			</div>
			<div class="col">
				<Card/>
			</div>
		</div>
	</div>
);
