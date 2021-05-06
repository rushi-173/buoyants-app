import React from "react";
import "./ShareNews.css";
// import {Link} from "react-router-dom";

export function ShareNews() {

	return (
		<div className="container-column share-news">
			{/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSkgHFjEWNj8IJYVQFJ1AFaXNQMT-Gm459EeCEQ55mM_rp7A/viewform?embedded=true" className="form-container"/> */}
			<iframe title="news form" src="https://docs.google.com/forms/d/e/1FAIpQLSc-UlpLcVPZiPJRRYG2ddAkDs2R0879B81Q9LzuLsb5KJvyAw/viewform?embedded=true" className="form-container"/>
		</div>
	);
}


