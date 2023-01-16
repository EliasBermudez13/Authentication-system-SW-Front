import React from "react";

export const Card = () => {
    return(
        <div class="card">
			<img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536" class="card-img-top" alt="luke"/>
			<div class="card-body">
				<h4 class="card-title">Luke SkyWalker</h4>
				<p class="card-text">Gender:</p>
				<p class="card-text">Hair Color:</p>
				<p class="card-text">Eye Color:</p>
				<div className="d-flex justify-content-between">
					<button type="button" class="btn btn-outline-primary">Primary</button>
					<button type="button" class="btn btn-outline-warning"><i class="fa fa-heart"></i></button>
				</div>
			</div>
		</div>
    );
}

