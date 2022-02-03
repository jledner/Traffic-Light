import React, { useState, useEffect } from "react";

//create your first component
export const Home = ({ color }) => {
	return (
		<div>
			<div className="traffic-light">
				<div className={color == "red" ? "red active" : "red"}></div>
				<div
					className={
						color == "yellow" ? "yellow active" : "yellow"
					}></div>
				<div
					className={
						color == "green" ? "green active" : "green"
					}></div>
			</div>
		</div>
	);
};
