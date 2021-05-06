import React, { useEffect, useState } from "react";
import "./Banner.css";
// import {ProductCard} from '../index';

export function Banner() {
	const [frontClass, setFrontClass] = useState("card__side card__side--front front-1");
	const [backClass, setBackClass] = useState("card__side card__side--back back-1");
	// const [flipCheck, setFlipCheck]= useState(0);
    let flipCheck = 1;
    function rotateCards() {
        if (flipCheck%2 === 0 ) {
            setFrontClass("card__side card__side--front showGreen");
            setBackClass("card__side card__side--back showRed");
            // setFlipCheck(1)
            flipCheck += 1;

        } else {
            setFrontClass("card__side card__side--front");
            setBackClass("card__side card__side--back");
            // setFlipCheck(0)
            flipCheck += 1;
        }
		if(flipCheck < 5){
        setTimeout(rotateCards,3500);}
    }
	

	useEffect(() => {
		rotateCards();
	},[]);

	return (
		<div className="banner-card">
			<div className={frontClass} id="front-1">
				<div className="text-box">
					
				<h1 className="text-box-middle">Tired of all</h1>
					<h3 className="text-box-top">NEGATIVE</h3>
					<h3 className="text-box-lower">---things out there---</h3>
				</div>
			</div>
			<div className={backClass} id="back-1">
				<div className="text-box">
					
				<h1 className="text-box-middle" style={{color:"#3E2723"}}>Try looking at</h1>
					<h3 className="text-box-top"  style={{color:"#d50000", background:"#ffffff6c"}}>POSITIVE</h3>
					<h3 className="text-box-lower" style={{color:"#3E2723"}}>---stuff through our lens---</h3>
				</div>
			</div>
		</div>
	);
}
