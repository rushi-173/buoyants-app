import React, {useState, useRef, useEffect} from "react";
import "./SearchAndExplore.css";
// import {Link} from "react-router-dom";
import { NewsCard } from "../../components/index";

export function SearchAndExplore({data,dataRows}) {
	console.log("from home",data, dataRows);
	// const imgUrl = dataRows[6];
	// console.log(data[0][imgUrl]);
    const [searchText, setSearchText] = useState("");
	const [result, setResult] = useState([]);
	const searchInput = useRef(null);


    useEffect(() => {
		searchInput.current.focus();
	}, []);

	useEffect(() => {
        if(data !== []){
		setResult(
			data.filter((item) => {
				return item["Title:"].toUpperCase().includes(searchText.trim().toUpperCase());
			})
		);}
	}, [searchText, data]);

	return (
		<div className="container-column Home">
            <div><br/><br/></div>
							<div
					className="container search-container"
					id="search" style={{flexWrap:"nowrap"}}
				>
					<div class="input-group" style={{ width: "100%", margin: "0" }}>
						<input
							id="name"
							type="search"
							value={searchText}
							class="input-area"
							style={{ borderRadius: "0px" }}
							onChange={(e) => {
								setSearchText(e.target.value);
							}}
							ref={searchInput}
						/>
						<label for="name" style={{visibility: searchText===""?"visible":"hidden",}}>Search</label>
					</div>
					<button
						className="btn btn-primary"
						style={{ width: "20%", margin: "0", borderRadius: "0px" }}
					>
						<i class="fa fa-search" aria-hidden="true"></i>
					</button>
				</div>

            <h4 className="text-box-top-mini"><span>❤️</span> FIND &nbsp;OLD&nbsp; HAPPY &nbsp; NEWS <span>❤️</span></h4>
			<div className="news-container">
				{result.map((item)=>{
					if(item["verified"]==="1"){
					return <NewsCard news={item} dataRows={dataRows}/>
					}
					return null;
					
				})}
			</div>
            
			<div><br/><br/><br/><br/></div>


		</div>
	);
}
