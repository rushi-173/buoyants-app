import "./NewsCard.css";

export function NewsCard({ news, dataRows }) {
	console.log("news", news, dataRows);
	function showSourceBtn(news){
		// if(news["Source of News :"]==="twitter"){
		// 	return (
		// 				<a href={news["Link to Source :"]} rel="noreferrer" target="_blank" className="btn btn-outline-twitter">
		// 				Details on Twitter<i class="fa fa-twitter icon-right" aria-hidden="true"></i>
		// 			</a>
		// 	)

		// }
		if(news["Link to Source :"] !== "" ){
			return (
			<a href={news["Link to Source :"]} rel="noreferrer" target="_blank" className="btn btn-primary">
				Visit Source
			</a>
		) }
		
	}
	return (
		<div className="newsCard container-column">
			<div className="description-details">
				<h3
					style={{
						wordBreak: "break",
						margin: "0px",
						marginBottom: "0.5rem",
					}}
				>
					{news["Title:"]}
				</h3>
			</div>
			<div className="description-next">
				<p>{news["Description :"]}</p>
			</div>

			<div className="card-source-container">
				{showSourceBtn(news)}
			</div>
		</div>
	);
}
